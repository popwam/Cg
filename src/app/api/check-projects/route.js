import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import rawProducts from "@/json/productsData.json";
// Firebase Admin SDK
import admin from "firebase-admin";

// تحميل ملف service account من Firebase (نزله من Firebase Console)
const serviceAccountPath = path.join(process.cwd(), "service-account.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(
      JSON.parse(fs.readFileSync(serviceAccountPath, "utf8"))
    ),
  });
}

// مسار ملف المشاريع الداخلي
const projectsFile = path.join(process.cwd(), rawProducts);

// متغير لتخزين النسخة القديمة
let oldProjects = null;

export async function GET() {
  try {
    // قراءة المشاريع الحالية
    const data = fs.readFileSync(projectsFile, "utf8");
    const projects = JSON.parse(data);

    // أول مرة: نخزن النسخة ونرجع بدون إشعار
    if (!oldProjects) {
      oldProjects = projects;
      return NextResponse.json({ message: "Initialized, no changes yet" });
    }

    // مقارنة بين القديم والجديد (ببساطة هنا بالمحتوى كله)
    if (JSON.stringify(oldProjects) !== JSON.stringify(projects)) {
      // تحديث النسخة
      oldProjects = projects;

      // إرسال إشعار عبر Firebase
      const message = {
        notification: {
          title: "تحديث المشاريع 🏗️",
          body: "تم تعديل المشاريع أو الأسعار، شاهد الآن!",
        },
        topic: "projects", // كل المستخدمين المشتركين في هذا التوبيك هيوصلهم
      };

      await admin.messaging().send(message);

      return NextResponse.json({ message: "Changes detected, notification sent" });
    }

    return NextResponse.json({ message: "No changes" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

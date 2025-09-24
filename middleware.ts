// middleware.ts
import { NextResponse, type NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const { pathname } = url;

  // تجاهل ملفات Next الداخلية والملفات الستاتيكية و الـ API
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') // امتداد ملف: .png .css ...
  ) {
    return NextResponse.next();
  }

  // لو فيه أي حرف كابيتال -> حوّل للمسار بحروف صغيرة
  if (/[A-Z]/.test(pathname)) {
    const lower = url.clone();
    lower.pathname = pathname.toLowerCase();
    // 308 = إعادة توجيه دائمة مع الحفاظ على الميثود والـ body
    return NextResponse.redirect(lower, 308);
  }

  return NextResponse.next();
}

// (اختياري) ماتشر لتجاهل ملفات ستاتيكية/داخلية
export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
};

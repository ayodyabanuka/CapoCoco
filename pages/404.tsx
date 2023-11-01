import Link from "next/link";


function NotFoundPage() {
  return (
    <>
      <div className=" flex h-[90vh] flex-col justify-center items-center text-center text-black">
        <div className="mb-4 font-heading text-7xl tracking-tight font-extrabold lg:text-9xl text-[#8C6120]">
          404
        </div>
        <div className="mb-4 font-heading text-3xl tracking-tight font-bold md:text-4xl">
          Page Not Fount.
        </div>
        <div className="mb-4 text-lg">
          Sorry, we cannot find that page. You will find lots to explore on
          the home page.{' '}
        </div>
        <Link href={'/'}>
          <div className="px-7 py-2 bg-[#8C6120] text-white rounded-xl w-fit">Visit Home</div>
        </Link>
      </div>
    </>
  );
}

export default NotFoundPage;

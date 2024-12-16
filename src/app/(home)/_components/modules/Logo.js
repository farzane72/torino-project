import Image from "next/image";
function Logo() {
    return (
        <div className="hidden lg:block">
            <Image
              src="/images/torino.png"
              width={146}
              height={44}
              alt="logo of torino"
            />
          </div>
    )
}

export default Logo

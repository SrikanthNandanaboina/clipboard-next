import Items from "./footerData";

function Footer() {
  return (
    <div class="bg-white p-5 flex flex-col justify-start my-4 xl:flex-row">
      {Items.map((ele) => (
        <div class="flex flex-col mx-8 my-2 max-w-2xl" key={ele.title}>
          <span class="font-bold text-base mb-1">{ele.title}</span>
          {ele.content.map((text) => (
            <span class="text-base font-normal my-1" key={text}>
              {text}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Footer;

import Link from "next/link";

export default function Button({ text, toLink, onClickFunction }) {
  return (
    <Link href={toLink && `/${toLink}`}>
      <button
        className="py-3 px-7 text-white font-medium leading-5 bg-sky-700 rounded-full shadow-sm hover:bg-sky-800 transition"
        role="button"
        onClick={() => {
          if (onClickFunction) {
            onClickFunction();
          }
          console.log(onClickFunction);
        }}
      >
        {text}
      </button>
    </Link>
  );
}

Button.defaultProps = {
  text: "Button",
  toLink: "",
  onClickFunction: false,
};

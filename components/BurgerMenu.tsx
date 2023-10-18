import { JSX } from "preact";

export function BurgerMenu(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <div class="burger-menu">
      <label class="burger">
        <span></span>
        <input type="checkbox" />
        <span></span>
        <div id="close-burger">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </label>
      {props.children}
    </div>
  );
}

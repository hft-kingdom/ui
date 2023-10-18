import { PageProps } from "$fresh/server.ts";
import { BurgerMenu } from "../../components/BurgerMenu.tsx";

export default function Guest(props: PageProps) {
  return (
    <div class="guest">
      <BurgerMenu>
        <a href="/">
          HOME
        </a>
      </BurgerMenu>
    </div>
  );
}

// src/config/fontawesome.ts
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

export function initFontAwesome() {
  library.add(fab, faCheckSquare, faCoffee);
}

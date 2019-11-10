import * as main_md from "./main.md";
import * as resources_md from "./resources.md";
import * as footer_md from "./footer.md";
import * as logo_noshadow_png from "./logo_noshadow.png";
import * as logo_withshadow_png from "./logo_withshadow.png";

const files: any = {
  main_md,
  resources_md,
  footer_md,
  logo_noshadow_png,
  logo_withshadow_png
};

function getFile(url: string) {
  if (url.startsWith("http")) {
    return url;
  }

  const localUrl = url.replace(".", "_");
  if (localUrl in files) {
    return files[localUrl];
  }

  return process.env.PUBLIC_URL + url;
}

export { getFile };

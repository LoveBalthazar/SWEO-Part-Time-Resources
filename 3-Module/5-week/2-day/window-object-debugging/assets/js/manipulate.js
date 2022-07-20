export function changeTitle() {
  // Change the title of the page to "(Your name)'s Portfolio"
  // window.document // is the same as // document
  // document.title = "Zaviar's Portfolio";

  const title = document.head.children[2];
  title.innerText = "Zaviar's Portfolio";
}

export function changeHeader() {
  // Change the name in the h1 of the page to your name
  const header = document.body.children[0];
  const h1 = header.children[0];
  h1.innerText = 'I am Zaviar Brown';
}

export function changeAboutMe() {
  /* Update the first paragraph in the About Me section with a small
     passage about yourself */
  const aboutMe = document.body.children[1];
  const p1 = aboutMe.children[1];
  const p2 = aboutMe.children[2];

  p1.innerText = 'Wow this project is so crazzyyyy';
  p2.innerText = "This sucks because there's better ways to do this now";
}

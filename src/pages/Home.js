export default function Home() {
  return (
    <div className="home">
      <h1>Front-End Challenge</h1>
      <p className="challenge-des">
        The overall task is to be completed using React. If you wish, you may use relevant
        libraries and frameworks, including but not limited to router, bootstrap,
        tailwind, etc. The front-end task consists of two pages where the first page will
        be login and the second page will be a detailed flip-box.
      </p>
      <div></div>
      <list className="home-list">
        <li className="home-list-items">
          {" "}
          <strong>Navigation bar: </strong> as users go through each of the pages, a
          highlight should be shown underneath the title of the page they are in as shown.
        </li>
        <li className="home-list-items">
          {" "}
          <strong>Login: </strong>username and password only, no filter is necessary for
          either of the input, except that each input cannot be empty. When username and
          password are both inputted and submitted, console the inputs.
        </li>
        <li className="home-list-items">
          {" "}
          <strong>Detailed flipped-box: </strong>content can be lorem ipsum or any
          appropriate phrases for filling up the spaces. As users click anywhere in the
          detail box, the flip-box should open and the content should be shown as the
          above box. When users click the detail box again, contents should be closed as
          shown in the bottom box. The arrow in the detail box should indicate the state
          whether the content box is open or not.
        </li>
        <li className="home-list-items">
          {" "}
          <strong>Design: </strong>: Be as creative as possible you can look at our
          landing page (www.getjitto.com) to get some design inspiration or look at some
          of inspiration companies like instacart.com, faire.com and similar.
        </li>
      </list>
    </div>
  );
}

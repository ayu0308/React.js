/**
 *
 * <div id='parent'>
 *    <div id='child'>
 *       <h1>i am h1 tag</h1>
 *    </div>
 * </div>
 *ReactElement(object) = HTML(Browser understand)
 *
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Iam h1 tag"),
    React.createElement("h2", {}, "Iam h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Iam h1 tag"),
    React.createElement("h2", {}, "Iam h2 tag"),
  ]),
]);

// const heading = React.createElement(
//   //kya banana chahte h
//   "h1",
//   //props
//   {
//     idd: "heading",
//     xyz: "abc",
//   },
//   //children
//   "Hello World by React"
// );
// console.log(heading); //object
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

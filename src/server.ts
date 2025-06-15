import app from "./app";


const server = app.listen(app.get("port"), () => {
  console.log(
    "App is running at http" +
    "://localhost:%d in %s node",
    app.get("port"),
    app.get("env")
  );
  console.log("Press Ctrl-c to stop App\n")
})


export default server;

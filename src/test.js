<!DOCTYPE html>
<html>
  <head>
    <script
      src="https://unpkg.com/react@18/umd/react.development.js"
      crossorigin
    ></script>
    <script
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
      crossorigin
    ></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>

  <body>
    <div id="mydiv"></div>
    <script type="text/babel">
      function Hareesh() {
        return <h1>Hello Hareesh</h1>;
      }
      const test = document.getElementById('mydiv');
      const test1 = ReactDOM.createRoot(test);
      test1.render(<Hareesh />);
    </script>
  </body>
</html>

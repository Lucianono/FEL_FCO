<html>
    <head>
		
		<title>AJC Bike Shop MIS</title>
		<link rel="stylesheet" href="css/entry_styles.css">
    </head>
    <style>
      * {
        box-sizing: border-box;
        font-family: Tahoma, "Trebuchet MS", sans-serif;
      }
      html,
      body,
      .wrapper {
        height: 100%;
      }
      body {
        display: grid;
        place-items: center;
        margin: 0 auto;
        padding: 0 24px;
        background-image: url(images/polygon-scatter-haikei.svg);
        background-repeat: no-repeat;
        background-size: cover;
        color: solid white;
        animation: rotate 6s infinite alternate linear;
      }
    </style>
  
    <body>
      <!-- 1st screen to be seen, for login / signup-->
      <div class="login_Body">
        <h1>AJC Bike Shop</h1>
        <h2>Login</h2>
        <form class="login_Form">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit"><b>LOGIN</b></button>
        </form>
      </div>
    </body>

</html>

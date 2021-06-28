import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  return (
		  <nav class="navbar navbar-inverse">
		  <div class="container-fluid">
		    <div class="navbar-header">
		      <a class="navbar-brand" href="#">WebSiteName</a>
		    </div>
		    <ul class="nav navbar-nav">
		      <li class="active"><a href="#">Home</a></li>
		      <li><a href="#">Page 1</a></li>
		      <li><a href="#">Page 2</a></li>
		    </ul>
		    <ul class="nav navbar-nav navbar-right">
		      <li><a href="#"><span class="bi bi-person"></span> S'inscrire</a></li>
		      <li><a href="#"><span class="bi bi-unlock"></span> Se connecter</a></li>
		    </ul>
		  </div>
		</nav>	  
  );	
}



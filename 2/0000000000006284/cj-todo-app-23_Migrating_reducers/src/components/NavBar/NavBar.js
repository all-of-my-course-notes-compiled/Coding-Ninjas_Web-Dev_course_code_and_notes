
import styles from "./NavBar.module.css";

function NavBar(){
    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Utility Apps</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li className={styles.navitem}>
          <a class="nav-link active" aria-current="page" href="todo">To Do</a>
        </li>
        <li className={styles.navitem}>
          <a class="nav-link active" aria-current="page" href="notes">Note</a>
        </li> 
      </ul>
    </div>
  </div>
</nav>
    );
}

export default NavBar;
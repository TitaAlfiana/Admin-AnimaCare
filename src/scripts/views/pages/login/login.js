import './login.css';
import Logo from '../../../../public/Logo.png';

const Login = {
  async render() {
    return `
    <form class="form-signin">
        <img class="mb-4" src="{${Logo}}" alt="" width="72" height="72">
        <h1 class="h3 mb-3 font-weight-normal judul">Selamat Datang!</h1>
        <div class="form-group">
          <label for="exampleInputEmail1">Alamat Email</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Kata Sandi</label>
          <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <button class="btn btn-lg btn-primary btn-block btn-submit" type="submit">Masuk</button>
        <p class="mt-5 mb-3 copyright">&copy; AnimaCare 2022</p>
    </form>
    `;
  },
};

export default Login;

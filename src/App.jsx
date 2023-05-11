import Profile from "./components/Profile";
import Avatar from "./assets/cortada2.jpeg";
export default function App() {
  return (
    <div className="app">
      <Profile
        avatar={Avatar}
        name="Philipe Agra"
        bio="Full-stack Javascript developer at Acme Inc."
        email="E-mail: philipeagra.dev@gmail.com"
        phone="Phone: +55 (83) 98618-0928"
        githubUrl="https://github.com/philipeagra"
        linkedinUrl="https://www.linkedin.com/in/philipe-agra-135394163/"
        instragramUrl="https://www.instagram.com/phelipeagra/"
      />
    </div>
  );
}

import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "./CustomerSlice";
import { FaUserAlt, FaEnvelope, FaKey, FaMobile } from "react-icons/fa";
import styles from "./CreateCustomer.module.css";

import Button from "../../components/Button";
import Input from "../../components/Input";

function CreateCustomer() {
  const [name, setName] = useState("test");
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState(1234);
  const [phone, setPhone] = useState(345435);

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email || !password) return;
    dispatch(createCustomer(name, email, password, phone));
  }

  return (
    <main className={styles.create}>
      <section>
        <h1> Welcome! </h1>
        <h2> Create your Account </h2>

        <form onSubmit={handleSubmit}>
          <div>
            <span>
              <FaUserAlt className="log-icon" />
            </span>
            <Input
              type="text"
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <span>
              <FaEnvelope />
            </span>
            <Input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <span>
              <FaKey />
            </span>
            <Input
              type="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <span>
              <FaMobile />
            </span>
            <Input
              type="tel"
              placeholder="Enter your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <Button> Create Account </Button>

        </form>
      </section>

      <section>
        <img src="create.jpeg" alt="Login icon" />
      </section>
    </main>
  );
}

export default CreateCustomer;
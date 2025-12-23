import React from "react";
import Card from "./components/card.jsx";

const App = () => {
  return (
    <div className="parent">
      <Card
        user="Reha"
        img="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        bio="FrontEnd Developer"
      />
      <Card
        user="Sneha"
        img="https://images.unsplash.com/photo-1753395298705-2609896d4c46?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        bio="UI/UX Designer"
      />
      <Card
        user="Arohi"
        img="https://images.unsplash.com/photo-1759873911654-4e05885a6e41?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        bio="Database"
      />
      <Card
        user="Priyanshi"
        img="https://plus.unsplash.com/premium_photo-1749505639605-52c1c775439a?q=80&w=1334&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        bio="Backend Developer"
      />
    </div>
  );
};

export default App;

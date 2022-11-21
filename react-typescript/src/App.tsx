import React, { useState } from 'react'
import './App.css'


type TypeparagraphyProps = { 
  children: React.ReactNode; 
  size?: 'small' | 'large' 
};

type PragraphProps = {
  color: string;
}

const Paragraph = ({ children, size, color } : TypeparagraphyProps & PragraphProps) => {
  return (
    <h1 
    style={{ 
      fontSize: size === "small" ? "1.5rem" : "3rem",
      color: color,
    }}
    >
      {children}
    </h1>
  );
};

const Title = ({ children, size } : TypeparagraphyProps) => {
  return (
    <h1 
    style={{ 
      fontSize: size === "small" ? "1.5rem" : "3rem",
    }}
    >
      {children}
    </h1>
  )
};

const titleDefautProps = {
  size: 'small',
}

Title.defaultProps = titleDefautProps;

const user = {
  id: 1,
  name: 'John Doe',
  age: 123,
  isAdmin: true,
  birthDate: new Date("1899-01-01"),
};

type UserAttributes = typeof user;

function sumNumbers(a: number, b: number) {
  return a + b;
}

function List<ItemType>({ 
  items, 
  render,
 } : {
  items: ItemType[]; 
  render: (item: ItemType, index: number) => React.ReactNode;
}) {
  return (
    <ul>
      {items.map((item, index) => {
        return render(item, index);
      })}
    </ul>
  )
}

function App() {
  const [count, setCount] = useState(0)

  const items = [
    {
      id: 1,
      name: 'John Doe'
    },
    {
      id: 2,
      name: 'Mary Doe'
    },
  ];

  return (
    <div className="App">
      <Title size='small'>
        <span>
          Hello <b>World</b>!
        </span>
      </Title>

      <Paragraph color='gold' size='small'>
        This is an Paragraph
      </Paragraph>

      <List 
        items={items} 
        render={(item, index) =>{
          if (item.id === 1) {
            return <p>{item.name}</p>
          }

          return <h3>{item.name}</h3>
      }}
        />
    </div>
  )
}

export default App


/*


  TypeScript 

  ________


  To start the app type on the cmd = yarn dev

  ________

  For passing dynamically the Props of Title using TypeScript
  is necessary to define the type of the component

  ________


  ________


  Are 3 ways to define 


  ________

  ________



  1#####



  First define the

  type TitleProps = {
    text: string;
  }

  =

  then pass on the
  
  const Title = ("""{ text }: TitleProps)""" => {
  return <h1>{text}</h1>
  };

  =

  then on the return on the function App

  I can call the props text on the component Title

  like this

  =

  <Title text="Hello World!" />

  For "Props" commonly is used "type" for the definition

  _________


  _________



  2 #####

  The second way to type an object
  
  _________


  interface TitleProps = {
    text: string;
  }

  _________

  The result is the same but,
  the common use of "interface"
  is to define the shape of an object
  or the shape of an API

  _________


  _________



  3 #####


  The third way is defining the type of the object
  directly on the Prop

  like this

  _________

  const Title = ({ children }: { children: React.ReactNode }) => {
    return <h1>{children}</h1>
  };


  the to call this on the "return"

  Do like this

  =

  return (
    <div className="App">
    
      <Title> 
        <span>
          Hello <b>World!</b>
        </span>
      </Title>
    
    </div>
  )

  ________

  Doing this way I can make is possible to pass not only a primitive data

  Is possible to pass an ReactNode, more complex data

  ________


  

  ________

*/
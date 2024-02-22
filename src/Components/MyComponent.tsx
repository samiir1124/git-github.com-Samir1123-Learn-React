import PropTypes from 'prop-types';

interface MyComponentProps {
    name: string;
    age: number;
  }

  const MyComponent: React.FC<MyComponentProps> = ({ name, age }) => (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Age: {age}</p>
    </div>
  );

MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};

export default MyComponent;
import Button from 'react-bootstrap/Button';
import myPhoto from './erlich.webp'

const GitHubCard = () => {
  return (
    <div>
    <h1>aginiguez</h1>
    <img src={myPhoto} alt="photoOfMe" />
      <Button variant="primary">Primary</Button>
     <h2>Hello</h2>
    </div>
  )
}

export default GitHubCard
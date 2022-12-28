<h1 align="center"> cv-application 📝</h1>  

#### Click [here](https://lisa-go.github.io/cv-application/) for live preview.
<br><br>

# Made with

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
<br><br>

# Description

#### A simple tool to create a resume online using the user's form input. This was my first React project, and I learnt a lot about states, props and hooks from this project.
<br><br>

# Features
- General Information updates in real time as the user inputs information.
- User can choose their own picture for the resume.
- Able to add and delete skills, education information, and work experience.
<br><br>

# Previews

### Home Page
<img src="https://i.imgur.com/uDqhiox.png" alt="homepage" width="700" />

### Delete button
<img src="https://i.imgur.com/qmm2lsb.png" alt="modal" width="300" />
<br><br>

# Things I learned from this Project
* This was my first time using React Hook Forms! It made dealing with several forms much easier.
```js
import { useForm } from "react-hook-form";

const { register, handleSubmit } = useForm();

<input type="text" id="workname" {...register('workname')} />
```
* It was also my first time using uuid, which made generating IDs for each object in my state easier, and I was also able to use it as the key for my map of the array.
```js
import { v4 as uuidv4 } from 'uuid';

  const [skill, setSkill] = useState([{
    skill: 'Coding!',
    skid: uuidv4(),
    show: true
  }])
```
* Learnt how to set the file the user chose as the image source.
```js
const [file, setFile] = useState(defpic);
  const handleFile = (e) => {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
    console.log(file);
  }

    <input type="file" id="photo" name="photo"
    accept="image/png, image/jpeg"
    onChange={handleFile}></input>

     <img src={file} id="GenPhoto" />
```
* How to render a button when a div is hovered.
```js
const [isHovering, setIsHovering] = useState(false);
const handleMouseOver = () => {
    setIsHovering(true);
};
const handleMouseOut = () => {
    setIsHovering(false);
};
{isHovering && (
    <DeleteBtn id={edu.eduid} edu={edu} removeElement={removeElement} />
)}
```
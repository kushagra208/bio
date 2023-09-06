import React, { useEffect } from "react";
import "./Home.css";
import * as THREE from "three";
import moonImage from "../../Images/moon.jpg";
import venusImage from "../../Images/venus.jpg";
import spaceImage from "../../Images/space.jpg";
import { Typography } from "@mui/material";
import TimeLine from "../TimeLine/TimeLine";
import {
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
  SiPython,
} from "react-icons/si";
import YoutubeCard from "../YoutubeCard/YoutubeCard";
import { Link } from "react-router-dom";
import { MouseOutlined } from "@mui/icons-material";

const Home = ({ timelines, projectCards, skills }) => {
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();

    const moonTexture = textureLoader.load(moonImage);
    const venusTexture = textureLoader.load(venusImage);
    const spaceTexture = textureLoader.load(spaceImage);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(4, 4, 8);

    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas });

    const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
    const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);

    const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
    const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);
    venus.position.set(8, 5, 5);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    const pointLight2 = new THREE.PointLight(0xffffff, 0.1);

    pointLight.position.set(8, 5, 5);
    pointLight2.position.set(-8, -5, -5);

    scene.add(moon);
    scene.add(venus);
    scene.add(pointLight);
    scene.add(pointLight2);
    scene.background = spaceTexture;

    const constSpeed = 0.01;
    window.addEventListener("mousemove", (e) => {
      if (e.clientX <= window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientX > window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }

      if (e.clientY > window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientY <= window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }
    });

    const animate = () => {
      requestAnimationFrame(animate);
      moon.rotation.y += 0.001;
      venus.rotation.y += 0.001;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };

    animate();

    return window.addEventListener("scroll", () => {
      camera.rotation.z = window.scrollY * 0.001;
      camera.rotation.y = window.scrollY * 0.003;

      const skillsBox = document.getElementById("homeskillsBox");

      if (window.scrollY > 1500) {
        skillsBox.style.animationName = "homeskillsBoxAnimationOn";
      } else {
        skillsBox.style.animationName = "homeskillsBoxAnimationOff";
      }
    });
  }, []);

  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>

      <div className="homeCanvasContainer">
        <Typography variant="h1">
          <p>K</p>
          <p>U</p>
          <p>S</p>
          <p>H</p>
          <p>A</p>
          <p>G</p>
          <p>R</p>
          <p>A</p>
        </Typography>

        <div className="homeCanvasBox">
          <Typography variant="h2">DESIGNER</Typography>
          <Typography variant="h2">DEVELOPER</Typography>
          <Typography variant="h2">STUDENT</Typography>
          {/* <Typography variant="h2">CONTENT CREATOR</Typography> */}
        </div>

        <Link to="/projects">VIEW WORK</Link>
      </div>

      <div className="homeScrollBtn">
        <MouseOutlined />
      </div>

      <div className="homeContainer">
        <Typography variant="h3">TIMELINE</Typography>
        <TimeLine timelines={timelines} />
      </div>

      <div className="homeSkills">
        <Typography variant="h3">SKILLS</Typography>

        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
            <img src="https://www.computerhope.com/jargon/j/javascript.png" alt="Face1" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuEjZfn_CZ8ph3FaedJyIif2T0nzJ3dxG7b24uOt-ojsGiMKF6DF_itLRZUSuZPKF7DR8&usqp=CAU"alt="Face2" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="Face3" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            <img src="https://cdn-icons-png.flaticon.com/512/919/919826.png" alt="Face4" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img src="data:image/png;base64,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" alt="Face5" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            <img src="data:image/jpeg;base64,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" alt="Face6" />
          </div>
        </div>

        <div className="cubeShadow"></div>

        <div className="homeskillsBox" id="homeskillsBox">
          <SiPython />
          <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
          <SiMongodb />
          <SiExpress />
          <SiReact />
          <SiNodedotjs />
          <SiThreedotjs />
        </div>
      </div>

      <div className="homeYoutube">
        <Typography variant="h3">PROJECTS</Typography>

        <div className="homeYoutubeWrapper">
          {projectCards.map((item) => (
            <YoutubeCard
              image={item.image.url}
              title={item.title}
              url={item.url}
              id={item._id}
              key={item._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

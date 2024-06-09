import{P as e,a as i}from"./ProjectData-e2906e66.js";import{f as r,_ as o,r as n,c,d as l,a,o as d}from"./index-609ee452.js";const p=[new e("project-1","3D Wind Training","img/projects/3DWindTraining-Header.jpg",`
    <div class="paragraph">
     <strong>3D Wind Training </strong> is a VR Training tool for wind turbine assembly workers. It's divided into two parts, one part (The practice) where the operator is trained in how to do the process and another one (The exam) where the knowledge of the user is tested.
     The results of the exam (and other relevant data) are stored in a CMS that the teachers can use to check how the trainees are progressing. The system was designed so it was easy to extend and add more training process with different tools and industrial sectors.
     <br/>My role on the project was as lead (and only) developer. I designed and coded all the functionalities, from the library that contains the Training System to the design and deployment of the CMS and the communication logic with the app.  
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/OmTzBVijcCo" frameborder="0" allowfullscreen></iframe>
    </div>
    <!--div class="paragraph center">
        <a href="https://play.google.com/store/apps/details?id=some.playstore.thing" target="_blank"><img src="img/projects/play-store-logo.png" alt="Play Store badge" /></a>
    </div-->

    <div class="paragraph">
        Main features :
        <ul>
        <li>Modular solution, can be easily extendable and used in other projects.</li>
        <li>Allows to track trainees progression.</li>
        <li>Trains workers to work with dangerous machinery so it helps to reduce work related injuries.</li>
        <li>It's intuitive and easy to use.</li>
        </ul>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/3DWindTraining/cap_texas1.jpg" alt="3D Wind Training Screenshot" />
        <img class="pc-screenshot" src="img/projects/3DWindTraining/cap_texas3.jpg" alt="3D Wind Training Screenshot" />
    </div>
    `,"#23bd69",!0),new e("project-7","7 Cidades - Patrones","img/projects/7Cidades/cap_Patrones_Header.JPG",`
        <div class="paragraph">
            <strong>7 Cidades - Patrones</strong> is an interactive developed for a traveling exhibition that was exhibited in 7 spanish cities in the Galician region.
            The interactive consists on 15 Android boxes connected to 15 TVs and one windows PC connected to 3 proximity sensors and another TV. The Windows PC served as the central hub of the interactive, from it users could select a pattern that represented some common street element of the city it was exhibited on. When the user selected the pattern, the 15 Android boxes detected that and started emiting random images related to that pattern.
            The communication was done using the MQTT pattern from the IOT industry. The interactive was designed so it was easy to change the images to show without having to install or update any software.<br/>
            My role on the project was as the lead programmer, I designed and implemented the communication architecture and the main structure of the interactive and also lead another programmer who worked on the visual part of the interactive.

        </div>
        
        <div class="paragraph center">
            <iframe src="https://drive.google.com/file/d/1CfuQEMMT_AIYgB25bgKrKusfRZ7Xrspa/preview" width="720" height="480" allow="autoplay"></iframe>
        </div>

        <div class="paragraph">
            Main features :
            <ul>
            <li>The project is prepared to be easily configured for a different city with different patterns and images.</li>
            <li>Uses MQTT technology with makes the communication reliable and easy to maintain and extend.</li>
            <li>Clients can be heat connected at any time and it will work without any problems.</li>
            </ul>
        </div>
    
        <div class="paragraph center">
            <img class="pc-screenshot" src="img/projects/7Cidades/cap_Patrones_1.JPG" alt="Naraio Screenshot" />                       
        </div>`,"#082246",!0),new e("project-2","La Pinta VR","img/projects/LaPinta/carabelaLaPintaHeader.png",`
    <div class="paragraph">
        <strong>"La Pinta VR"</strong> is an interactive experience developed for the Museum of Baiona to showcase how was the returning to Spain of "La Pinta" one of the 3 spanish ships used by Christopher Columbus in his first transatlantic trip.<br/>
        The app shows how the live in the ship was, how they navigated in those years, what did they eat and the different roles the sailors had.
        My role on the project was (again, this is gonna be repeated a lot here) as lead (and only) developer. I designed and coded all the functionalities.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/nX25T662THE" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Realistic baked lighting.</li>
        <li>Nice little tricks to make it efficient and visually pleasing at the same time. Like water shader and flags moving.</li>
        <li>Voiced characters.</li>
        <li>Hand Interactions.</li>
        </ul>
    </div>

    <div class="paragraph center">
    <img class="pc-screenshot" src="img/projects/LaPinta/carabelaLaPinta_13.png" alt="La Pinta Screenshot" />
    <img class="pc-screenshot" src="img/projects/LaPinta/carabelaLaPinta_17.png" alt="La Pinta Screenshot" />
    </div>
    `,"#5a78af",!0),new e("project-3","AR Plumbing Configurator","img/projects/ABN/cap_ABN_Header.png",`
    <div class="paragraph">
        This AR project is for prototyping Plumbing installations on site. The elements, pipes, elbows, heaters, etc, where provided by a third party company in a BIM format.<br/> 
        These elements are dinamically added through a frontend, processed and uploaded in 3D format to a CMS, from where the main app downloads them.<br/> 
        My role on the project was designing and developing the service that took the BIM elements to transform them in the 3D format that could be read by the app. The service I programmed had to be efficient and separated each element processing in a different thread.   
        <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@miphotography">Miesha Maiden</a>.
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Several teams develop several interconnected systems in a succesful manner.</li>
        <li>The configurable elements can be added dinamically.</li>
        <li>With this app it's easier for the plumbing technicians to estimate the cost of plumbing.</li>
        </ul>
    </div>

    <div class="paragraph center">
        <img class="phone-screenshot" src="img/projects/ABN/cap_ABN_1.png" alt="AR Plumbing Screenshot" />
        <img class="phone-screenshot" src="img/projects/ABN/cap_ABN_2.png" alt="AR Plumbing Screenshot" />
        <img class="phone-screenshot" src="img/projects/ABN/cap_ABN_3.png" alt="AR Plumbing Screenshot" />
    </div>
    `,"#383838",!0),new e("project-4","Aquis Querquennis","img/projects/Aquis/cap_Aquis_Header.jpg",`
    <div class="paragraph">
    <strong>Aquis Querquennis</strong> is an AR project that depicts how was the life in an old roman camp. The project shows a reconstruction in 3D of the Principia building and its surroundings, accompanied by several Roman soldiers patrolling and performing various tasks.<br/> 
    My role on the project was as the Lead and only developer, designing and programming all systems. Baking the light, animating and "modeling" the characters and searching for appropiate props.   
    <div class="paragraph center">
    <iframe class="youtube" src="https://www.youtube.com/embed/xmtCAS3SG-M" frameborder="0" allowfullscreen></iframe>
    </div>
    
    <div class="paragraph">
        Main features :
        <ul>
        <li>Detailed graphics in mobile devices with AR.</li>
        <li>Vividly animated characters</li>
        <li>Gaze based interactions</li>
        </ul>
    </div>

    <div class="paragraph center">
        <img class="phone-screenshot" src="img/projects/Aquis/cap_Aquis_1.jpg" alt="Aquis Screenshot" />
        <img class="phone-screenshot" src="img/projects/Aquis/cap_Aquis_2.jpg" alt="Aquis Screenshot" />
    </div>
    `,"#e80fb7",!0),new e("project-6","Timetrip Narahío","img/projects/Naraio/cap_Naraio_Header.png",`
        <div class="paragraph">
            <strong>Timetrip Narahío</strong> is an AR app that depicts the history of a medieval castle. Using Vuforia AR technology, it shows a reconstruction of the castle and how its rise and fall was.<br/> 
            My role on the project was as lead developer, I designed the main structure and the systems involved on the project, lead the developing team and provided guidance with problems that arose during development.<br/> 
            This project was later on used as a template for other similar projects.
        </div>
        
        <div class="paragraph center">
            <iframe class="youtube" src="https://www.youtube.com/embed/s8Hq672Qqyo" frameborder="0" allowfullscreen></iframe>
        </div>

        <div class="paragraph">
            Main features :
            <ul>
            <li>The project is prepared to be easily extendable both with functionality and multimedia content.</li>
            <li>Beatiful cinematics with animated characters, particle effects and custom shaders.</li>
            </ul>
        </div>
    
        <div class="paragraph center">
            <img class="pc-screenshot" src="img/projects/Naraio/cap_Naraio_1.jpg" alt="Naraio Screenshot" />
            <img class="pc-screenshot" src="img/projects/Naraio/cap_Naraio_2.jpg" alt="Naraio Screenshot" />        
        </div>`,"#248246",!0),new e("project-5","XTAS","img/projects/XTAS/cap_XTAS_Header.png",`
    <div class="paragraph">
        <strong>XTAS</strong> is an AR extension to an existing app, TAS app, a lost-and-found goods app that allows the users to register places where they found or lost some object. 
        XTAS adds an AR layer to it, with it users can see a 3D representation in AR of the lost object. The app mixes GPS position and AR technology to correctly place the user in the real world and allows him to see AR objects in real gepositions.<br/> 
        The app was integrated into another app with Unity as a Library. My role on the project was as lead developer, I designed the systems involved on the project, lead the developing team and provided guidance with problems that arose during development.
    </div>
    
    <div class="paragraph">
        Main features :
        <ul>
        <li>Succesfully mixes GPS and AR data to place geopositioned objects.</li>
        <li>Integrated into another native app, iOS and Android.</li>
        </ul>
    </div>

    <div class="paragraph center">
        <img class="phone-screenshot" src="img/projects/XTAS/cap_XTAS_1.png" alt="XTAS Screenshot" />
        <img class="phone-screenshot" src="img/projects/XTAS/cap_XTAS_2.png" alt="XTAS Screenshot" />        
    </div>`,"#e48246",!0)],h=r({name:"GameProjects",components:{ProjectsList:i},data:function(){return{projects:p}}}),g=a("h1",null,"Projects",-1),m=a("div",{style:{"margin-bottom":"30px"}}," The following are some projects I've made or heavily contributed to. ",-1),u=a("div",{style:{"margin-top":"20px"}},null,-1);function f(t,v,w,b,y,j){const s=n("ProjectsList");return d(),c("div",null,[g,m,l(s,{projects:t.projects},null,8,["projects"]),u])}const A=o(h,[["render",f]]);export{A as default};

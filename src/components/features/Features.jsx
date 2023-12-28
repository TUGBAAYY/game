import React, { useState } from 'react';
import Modal from './Modal';
import "./features.css";
import img1 from "../../assets/crafting.svg";
import img2 from "../../assets/crosschain.png";
import img3 from "../../assets/multiverse.png";
import img4 from "../../assets/tokenize.png";
import img5 from "../../assets/gamer.svg";
import img6 from "../../assets/store.png";


const Data = [
  {
    id: 1,
    image: img1,
    title: "In-game items crafting",
    text: `In-game items crafting is a skill or set of skills option specifically provides in massively multiplayer online games or role playing games and other game genres. It allows the users to use basic tools within the game to construct a tool for themselves to use later, more likely for the purpose of competitive edge over other participants. Other game genres where crafting tool is available are, FPS team fortress 2, which allows its users to combine different weapons to create a new one. Or, sandbox Minecraft, which allows players to create and repair their weapons`,

  },
  {
    id: 2,
    image: img2,
    title: "Cross chain interpretability & custom wallet",
    text: `DeFi has a motive to incorporate traditional financial services in the cryptocurrency ecosystem. This can only be possible if each blockchain in the ecosystem can communicate and transfer information and data to other blockchains. A reliable and smooth transaction among these blockchain will enable to introduce traditional financial services to the digital currency ecosystem. Moreover, some platforms offer custom wallets where one can store more than one currency and use the interchangeable.`,
  },
  {
    id:3,
    image: img3,
    title: "Multiverse gaming",
    text: `The concept of multiverse gaming can be described as a set of parallel world, where theplayers can theoretically travel from one universe to the other with advancements in their levels and gaming tools. Sharded virtual worlds such as Ultima online are similar innature to multiverse games, however transportation and communication in sharderd worlds is not as easy as the traditional multiverse games`,

  },
  {
    id:4,
    image: img4,
    title: "Tokenize character  items",
    text: `Povo is one of those games that have tokenized their characters. Meaning that, you can now advance your levels within the game and monetize your virtual rewards. These virtual rewards can then be converted in tangible assets, traded or swapped with other monetized digital funds. Povo made it possible through the use of Non-fungible tokens (NFTs). It uses NFTs to monetized your virtual rewards.`,

  },
  {
    id:5,
    image: img5,
    title: "Gamer/devs can introduce their own token",
    text: `Blockchain has revolutionized the world of gaming. It allows the projection of value in intangible assets. It helps gamers to securely store their in-game assets. These in-gameassets can then be stored in the form of a token. And these token can in turn be monetized or swapped with other digital funds. This facility is provided to both developers and gamers.`,

  },
  {
    id:6,
    image: img6,
    title: "Dapp Store and game studio integration",
    text: `Decentralized applications are a set of programs that harness excess power from different nodes globally. These are community driven application. One example of theseare bitcoins. The integration of Dapps and gaming can create a brainchild which will allow making features of blockchains in gaming. These features might include, a decentralized gaming structure, secure storage of in-game assets, trading of gaming tokens, and interoperability among different games.`,

  }

];

const Features = () => {
  const [openModal, setOpenModal] = useState(Array(Data.length).fill(false));
  const [currentModalData, setCurrentModalData] = useState(null);

  const handleOpenModal = (index) => {
    const newOpenModal = Array(Data.length).fill(false);
    newOpenModal[index] = true;
    setOpenModal(newOpenModal);
    setCurrentModalData(Data[index]);
  };

  const handleCloseModal = () => {
    setOpenModal(Array(Data.length).fill(false));
    setCurrentModalData(null);
  };

  return (
    <>
      
    <section className="services section features">
      <div className="container text-center py-5">
        <h1 className='text-center text-white'>Povo Features</h1>
        <div className="row m-auto text-center cardWidht py-5">
          {Data.map(({ id, image, title, text }, index) => (
            <div className="col-md-4 mb-3" key={id}>
              <div className="card py-3 text-center cardTitle">
                <div>
                  <img src={image} className='card_image img-fluid text-center ' alt="" />
                </div>
                <h3>{title}</h3>
                <p className='text-start itempara'>{text.slice(0, 120)}...</p>
                <div className='text-end buttonClose'>
                  <button className='btnBtnn btn  text-end btn-priamry' onClick={() => handleOpenModal(index)}>Read more</button>
                  <Modal open={openModal[index]} onClose={handleCloseModal} data={currentModalData} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
   
      
    </>
  );
}

export default Features;

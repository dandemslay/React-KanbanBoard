/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Tag.css'

import { SiAstro } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { SiAngular } from "react-icons/si";
import { SiIonic } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiCsharp } from "react-icons/si";
import { SiPhp } from "react-icons/si";

const Tag = ({ tagName, selectTag, selected }) => {
  const tagStyle = {
    Html: {backgroundColor: "var(--html-color)", color: "#f9f9f9", border: ".2em solid lightgreen"},
    CSS: {backgroundColor: "var(--css-color)", color: "#f9f9f9", border: ".2em solid lightgreen"},
    Javascript: {backgroundColor: "var(--js-color)", color: "#f9f9f9", border: ".2em solid lightgreen"},
    Typescript: {backgroundColor: "var(--ts-color)", color: "#f9f9f9", border: ".2em solid lightgreen"},
    React: {backgroundColor: "var(--react-color)", color: "#f9f9f9", border: ".2em solid lightgreen"},
    Reactnative: {backgroundColor: "var(--reactnative-color)", color: "#f9f9f9", border: ".2em solid lightgreen"},
    Angular: {backgroundColor: "var(--angular-color)", color: "#f9f9f9", border: ".2em solid lightgreen"},
    Ionic: {backgroundColor: "var(--ionic-color)", color: "#f9f9f9", border: ".2em solid lightgreen"},
    Astro: {backgroundColor: "var(--astro-color)", color: "#f9f9f9", border: ".2em solid lightgreen"},
    Node: {backgroundColor: "var(--node-color)", color: "#f9f9f9", border: ".2em solid lightgreen"},
    Cs: {backgroundColor: "var(--cs-color)", color: "#f9f9f9", border: ".2em solid lightgreen"},
    Php: {backgroundColor: "var(--php-color)", color: "#f9f9f9", border: ".2em solid lightgreen"},
    default: {backgroundColor: "#f9f9f9"},
  }

  const STRING_TO_ICON = {
    Astro: <SiAstro className='tag_icon' alt='Astro'/>,
    Html: <SiHtml5 className='tag_icon'/>,
    CSS: <SiCss3 className='tag_icon' alt="CSS"/>,
    Javascript: <SiJavascript className='tag_icon'/>,
    Typescript: <SiTypescript className='tag_icon'/>,
    React: <SiReact className='tag_icon'/>,
    Reactnative: <TbBrandReactNative className='tag_icon'/>,
    Angular: <SiAngular className='tag_icon'/>,
    Ionic: <SiIonic className='tag_icon'/>,
    Node: <SiNodedotjs className='tag_icon'/>,
    Cs: <SiCsharp className='tag_icon'/>,
    Php: <SiPhp className='tag_icon'/>,

};
  return (
    <button type='button' className={`tag ${tagName}`} style={selected? tagStyle[tagName] : tagStyle.default} onClick={() => selectTag(tagName)}>{STRING_TO_ICON[tagName]}</button>
  )
}

export default Tag
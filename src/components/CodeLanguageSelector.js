import React, { Component } from "react";
import codeLanguageList from "./codeMirrorLanguages.json";
import Select from "react-select";

// remove when dynamic import is working in QuestionCode
const workingModeList = [
  "xml",
  "css",
  "javascript",
  "htmlmixed",
  "sql",
  "python",
  "clike"
];

const codeLanguages = Object.entries(codeLanguageList)
  .filter(([mode, languageNames]) => {
    return workingModeList.indexOf(mode) >= 0;
  })
  .map(([mode, languageNames]) =>
    languageNames.map(languageName => ({
      label: languageName,
      value: languageName
    }))
  )
  .flat();

console.log(codeLanguages);

const codeLanguageSelectorStyles = styles => ({
  ...styles,
  fontFamily: "sans-serif"
});

const getLanguageMode = languageName => {
  let languageMode = undefined;
  Object.keys(codeLanguageList).forEach(mode => {
    // console.log(codeLanguageList[mode]);
    if (codeLanguageList[mode].indexOf(languageName) >= 0) {
      // console.log("find language mode!");
      languageMode = mode;
    }
  });
  return languageMode;
};

class CodeLanguageSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codeLanguageOption: null
    };
    this.handleLanguageSelect = props.handleLanguageSelect;
  }

  handleSelect = selectedOption => {
    console.log("selected option: ", selectedOption);
    const selectedLanguage = selectedOption.value;
    console.log("selectedLanguage: " + selectedLanguage);
    const languageMode = getLanguageMode(selectedLanguage);
    console.log("languageMode: " + languageMode);
    this.setState({
      codeLanguageOption: selectedOption
    });
    const languageWithMode = languageMode + "/" + selectedLanguage;
    this.handleLanguageSelect(languageWithMode);
  };

  render() {
    return (
      <Select
        value={this.state.codeLanguageOption}
        onChange={this.handleSelect}
        options={codeLanguages}
        styles={{
          input: codeLanguageSelectorStyles,
          placeholder: codeLanguageSelectorStyles,
          singleValue: codeLanguageSelectorStyles,
          option: codeLanguageSelectorStyles
        }}
      />
    );
  }
}

export default CodeLanguageSelector;

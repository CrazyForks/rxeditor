import {RXElement} from "../rxelement"
//import {addonHeadingPseudo} from "../../schemas/heading/pseudo-heading"
//import {addonHeadingDisplay} from "../../schemas/heading/display"
//import {addonUtilBorder} from "../../schemas/utilities/border"

export class HTMLMark extends RXElement{
  constructor() {
    super()
    this.toolboxInfo.groupId = 'groupHtml'
    this.toolboxInfo.elementId = 'htmlMark'
    this.toolboxInfo.elementName = "Mark"
    this.className = 'HTMLMark'

    this.editMarginStyle = {}

    //this.groups.paragraphOptions = {
    //  label:'Mark Options'
    //}
    this.meta.tag = 'mark'
    this.meta.innerHTML = "Hightlight text ..."
    this.label = "mark"

    this.becomeToTextfield()
    /*addonUtilColor(this)
    addonUtilBorder(this)
    addonUtilMargin(this)
    addonUtilPadding(this)
    addonUtilText(this)*/
    //addonHeadingPseudo(this, 'textOptions')
    //addonHeadingDisplay(this, 'textOptions')
  }

  make(){
    return new HTMLMark
  }
}

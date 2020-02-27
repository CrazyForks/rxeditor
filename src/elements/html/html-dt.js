import {RXElement} from "../rxelement"
//import {addonHeadingPseudo} from "../../schemas/heading/pseudo-heading"
//import {addonHeadingDisplay} from "../../schemas/heading/display"
//import {addonUtilBorder} from "../../schemas/utilities/border"

export class HTMLDt extends RXElement{
  constructor() {
    super()
    this.toolboxInfo.groupId = 'groupHtml'
    this.toolboxInfo.elementId = 'htmlDt'
    this.toolboxInfo.elementName = "Dt"
    this.className = 'HTMLDt'

    this.editMarginStyle = {}

    //this.groups.paragraphOptions = {
    //  label:'Dt Options'
    //}
    this.meta.tag = 'dt'
    this.meta.innerHTML = "Dt text ..."
    this.label = "dt"

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
    return new HTMLDt
  }
}

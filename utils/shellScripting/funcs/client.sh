createReactComponent() {
    local compName=$(readData "What is the component name?")
    
    compName="$(tr '[:lower:]' '[:upper:]' <<< ${compName:0:1})${compName:1}"
    local addr="client/src/components/$compName"
    local testFolderAddr="client/src/components/$compName/__test__"
    mkdir -p "$addr"
    mkdir -p "$testFolderAddr"
    
    local jsContext=$(getJsContext $compName)
    local indexContext="export { default } from \"./$compName\";"
    local testFileContext=$(getTestFileContext $compName)
    
    local innerJsFileAddr="client/src/components/$compName/$compName.js"
    local innerIndexFileAddr="client/src/components/$compName/index.js"
    local innersassFileAddr="client/src/components/$compName/$compName.module.scss"
    local innerTestFileAddr="client/src/components/$compName/__test__/$compName.test.js"
    
    echo "$jsContext" >> $innerJsFileAddr
    echo "$indexContext" >> "$innerIndexFileAddr"
    echo "$testFileContext" >> $innerTestFileAddr
    touch "$innersassFileAddr"
    
    echo "Done!"
    
    return 0
}

createReactBaseComponent() {
    local compName=$(readData "What is the component name?")
    
    compName="$(tr '[:lower:]' '[:upper:]' <<< ${compName:0:1})${compName:1}"
    local addr="client/src/baseComponents/$compName"
    local testFolderAddr="client/src/baseComponents/$compName/__test__"
    mkdir -p "$addr"
    mkdir -p "$testFolderAddr"
    
    local jsContext=$(getJsContext $compName)
    local indexContext="export { default } from \"./$compName\";"
    local testFileContext=$(getTestFileContext $compName)
    
    local innerJsFileAddr="client/src/baseComponents/$compName/$compName.js"
    local innerIndexFileAddr="client/src/baseComponents/$compName/index.js"
    local innersassFileAddr="client/src/baseComponents/$compName/$compName.module.scss"
    local innerTestFileAddr="client/src/baseComponents/$compName/__test__/$compName.test.js"
    
    echo "$jsContext" >> $innerJsFileAddr
    echo "$indexContext" >> "$innerIndexFileAddr"
    echo "$testFileContext" >> $innerTestFileAddr
    touch "$innersassFileAddr"
    
    echo "Done!"
    
    return 0
}

createReactPage() {
    local pageName=$(readData "What is the page name?")
    
    local addr="client/src/pages/$pageName"
    mkdir -p "$addr"
    
    local jsContext=$(getJsPageContext Index)
    
    local innerIndexFileAddr="client/src/pages/$pageName/index.js"
    local innersassFileAddr="client/src/pages/$pageName/Index.module.scss"
    
    echo "$jsContext" >> "$innerIndexFileAddr"
    touch "$innersassFileAddr"
    
    return 0
}

buildClient() {
    local versioningOptions=("patch" "minor" "major" "none")
    local changeVersion=$1
    if [[ ${versioningOptions[*]} =~ $changeVersion ]]
    then
        [ $changeVersion == "patch" ] && cd client && npm run build-patch && cd ..
        [ $changeVersion == "minor" ] && cd client && npm run build-minor && cd ..
        [ $changeVersion == "major" ] && cd client && npm run build-major && cd ..
        [ $changeVersion == "none" ] && cd client && npm run build && cd ..
    else
        buildClient
    fi
}

createReactCard() {
    local compName=$(readData "What is the card name?")
    
    compName="$(tr '[:lower:]' '[:upper:]' <<< ${compName:0:1})${compName:1}"
    
    local jsContext=$(getCardContext $compName)
    
    local innerJsFileAddr="client/src/baseComponents/ReusableComps/Card/subs/$compName.js"
    
    echo "$jsContext" >> $innerJsFileAddr

    # -----------------------------------

    local innerJsFileAddr="client/src/components/DevelopersPages/DevDesign/subs/DisplayCards/subs/$compName.js"
    
    local jsContext=$(getDevCardFileContext $compName)
    echo "$jsContext" >> $innerJsFileAddr
    
    echo -en "${I_YELLOW}"
    echo "1. Don't forget to add assign a new type to the CARD_TYPES varibles inside @/contants/devDesignVars.js"
    echo -en "${DEFAULT_COLOR}"
    echo "------------------------------------"
    echo -en "${I_YELLOW}"
    echo "2. Don't forget to import this newly created card into @/baseComponents/ReusableComps/Card/Card.js file and assign the newly created type to it."
    echo -en "${DEFAULT_COLOR}"
    echo "------------------------------------"
    echo -en "${I_YELLOW}"
    echo "3. Don't forget to import this newly created card into @/components/DevelopersPage/DevDesign/subs/DisplayCards/DisplayCards.js file and create a new block for this new type be displayed in the dev design page."
    echo -en "${DEFAULT_COLOR}"
    echo "------------------------------------"
    echo -en "${I_YELLOW}"
    echo "4. Don't forget to update the type of card in @/components/DevelopersPage/DevDesign/subs/DisplayCards/subs/$compName.js file."
    echo -en "${DEFAULT_COLOR}"
    echo "------------------------------------"
    echo "Done!"
    
    return 0
}



createReactModal() {
    local compName=$(readData "What is the modal name?")
    
    compName="$(tr '[:lower:]' '[:upper:]' <<< ${compName:0:1})${compName:1}"
    
    local jsContext=$(getModalContext $compName)
    
    local innerJsFileAddr="client/src/baseComponents/PageParts/Modal/subs/$compName.js"
    
    echo "$jsContext" >> $innerJsFileAddr

    # -----------------------------------

    local innerJsFileAddr="client/src/components/DevelopersPages/DevDesign/subs/DisplayModals/subs/$compName.js"
    
    local jsContext=$(getDevModalContext $compName)
    echo "$jsContext" >> $innerJsFileAddr
    
    echo -en "${I_YELLOW}"
    echo "1. Don't forget to add assign a new type to the MODAL_TYPES varibles inside @/contants/devDesignVars.js"
    echo -en "${DEFAULT_COLOR}"
    echo "------------------------------------"
    echo -en "${I_YELLOW}"
    echo "2. Don't forget to import this newly created modal into @/baseComponents/PageParts/Modal/Modal.js file and assign the newly created type to it."
    echo -en "${DEFAULT_COLOR}"
    echo "------------------------------------"
    echo -en "${I_YELLOW}"
    echo "3. Don't forget to import this newly created modal into @/components/DevelopersPage/DevDesign/subs/DisplayModals/DisplayModals.js file and create a new block for this new type be displayed in the dev design page."
    echo -en "${DEFAULT_COLOR}"
    echo "------------------------------------"
    echo -en "${I_YELLOW}"
    echo "4. Don't forget to update the type of card in @/components/DevelopersPage/DevDesign/subs/DisplayModals/subs/$compName.js file."
    echo -en "${DEFAULT_COLOR}"
    echo "------------------------------------"
    echo "Done!"
    
    return 0
}


createReactSubComp() {
    local compName=$(readData "What is the modal name?")
    
    compName="$(tr '[:lower:]' '[:upper:]' <<< ${compName:0:1})${compName:1}"
    
    local jsContext=$(getJsContext $compName)
    
    local innerJsFileAddr="client/src/components/$compName.js"
    
    echo "$jsContext" >> $innerJsFileAddr
    echo "Done!"
    
    return 0
}
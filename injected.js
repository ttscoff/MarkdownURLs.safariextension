function insertTextPanel(content) {
    // if (window !== window.top) return;
    var objPanel,
    objTextArea,
    objContainer;

    if (!document.getElementById('mainPanel')) {

        objTextArea = document.createElement('textarea');
        objTextArea.setAttribute('wrap', 'hard');
        objTextArea.setAttribute('id', 'markdownTextArea');
        objTextArea.setAttribute('rows', content.split('\n').length + 2);
        objTextArea.innerHTML = content;

        objContainer = document.createElement('div');
        objContainer.setAttribute('class', 'lcd_panel_element');
        objContainer.setAttribute('id', 'textContainer');
        objContainer.innerHTML = '<h3>Press Command-C to copy</h3>';
        objContainer.appendChild(objTextArea);

        objPanel = document.createElement('div');
        objPanel.setAttribute('id', 'mainPanel');
        objPanel.setAttribute('class', 'lcd_panel_element');
        objPanel.appendChild(objContainer);

        document.body.appendChild(objPanel);
        document.addEventListener('click', _removePanel);
        objTextArea.select();

    } else {
        console.log('already exists');

    }
    // document.getElementById('lcd_imgtag_textarea').select();

}

function _removePanel(event) {
    if (event.target.id != "markdownTextArea") {
        if (document.getElementById('mainPanel')) {
            var panel = document.getElementById('mainPanel');
            panel.parentNode.removeChild(panel);
            document.removeEventListener('click', _removePanel);

        }

    }

}

function messageHandler(event) {
    if (event.name === "openPanel") {
        insertTextPanel(event.message);

    }

}

safari.self.addEventListener("message", messageHandler, false);
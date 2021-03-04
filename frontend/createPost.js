const editor = new EditorJS({

    holder: 'editor-js',
    tools: {
        header: Header,
        list: List,
        image: {
            class: SimpleImage,
            inlineToolbar: ['link'],
        },
        link: LinkTool
    },
})

editor.isReady
    .then(() => {
        console.log('Editor.js is ready to work!')
    })
    .catch((reason) => {
        console.log(`Editor.js initialization failed because of ${reason}`)
    });

const saveButton = document.getElementById("saveButton");

saveButton.onclick = () => {
    editor.save().then((outputData) => {
        console.log(outputData);
        fetch("http://localhost:8080/api/blogPost", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(outputData),
        }).then(() => {
            console.log("Requested successfully");
        });
    }).catch((error) => {
        console.log('Saving failed: ', error)
    });
}


const fs = require('fs');

const getProfessional = () => {

    const image = fs.readFileSync('images/tired.png')
    const imageBase64 = Buffer.from(image).toString('base64')
    return {
        professionalName: "nick",
        base64Image: imageBase64,
        nameLink: {
            firstName: 'Nick',
            url: 'thisThing.org',
        },
        workDescription1: 'work',
        workDescription2: 'work2',
        linkTitleText: 'linkTitleFunctionThing',
        linkedInLink: {
            text: 'this is some text',
            link: 'this is a link'
        },
        githubLink: {
            text: 'github text',
            link: 'github link'
        }
    }
}

module.exports = {
    getProfessional
}
'use strict'
var gCanvas;
var gCtx;
var gMemes;
var gSelectedImg
var gKeywords = { 'happy': 1, 'funny': 1, 'comics': 1, 'dogs': 1, 'drinks': 1, 'books': 1 }
var gFilteredImgs = gImgs
var canvasCenter = 300
var gMeasureText = { width: 0, height: 10, x: canvasCenter, y: 30 }
var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            size: 40,
            align: 'left',
            color: 'white',
            y: 0,
            x: canvasCenter
        }
    ]
}


function increaseLineIdx() {
    gMeme.selectedLineIdx++
}



function setSelectedImage(imageId) {
    let selectedImage = gImgs.find((image) => image.id === imageId)
    if (selectedImage) {
        gMeme.selectedImgId = selectedImage.url
        gSelectedImg = selectedImage
    }
  
}

function getSelectImg(){
    return gSelectedImg
}

function createImg(id, url, keyword) {
    return {
        id: null,
        url: url,
        keyword: 'funny'

    }
}



function addTextToCanvas(text) {
    if (gMeme.lines.length - 1 < gMeme.selectedLineIdx) {
        gMeme.lines.push({})
    }
    gMeme.lines[gMeme.selectedLineIdx].txt = text
    gMeme.lines[gMeme.selectedLineIdx].size = 20

    memeSetLineHeight(initialLineHeight(gMeme.selectedLineIdx))

}


function memeSetLineHeight(height) {
    gMeme.lines[gMeme.selectedLineIdx].y = height
    gMeme.lines[gMeme.selectedLineIdx].x = canvasCenter
    drawMeme(gMeme.selectedImgId)
}



function renderCategories() {
    let category;
    const elContainer = document.querySelector('.categories-container');
   
    elContainer.innerHTML = ''
    for (category in gKeywords) {
        elContainer.innerHTML += `<span style="font-size: ${gKeywords[category] * 10}px; margin-right:10px" >${category} </span> `
    }

}
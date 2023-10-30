let importantItems = document.getElementsByClassName("important");

for (const item of importantItems) {
    item.setAttribute("title","This is an important item");
}
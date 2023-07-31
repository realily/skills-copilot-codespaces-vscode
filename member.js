function skillsMember() {
    var skills = [];
    var skillsList = document.querySelectorAll('.skills-list li');
    for (var i = 0; i < skillsList.length; i++) {
        skills.push(skillsList[i].innerText);
    }
    return skills;
}
// script.js
document.getElementById("toggleCaseStudy").addEventListener("click", function () {
    const caseStudyDetails = document.getElementById("caseStudyDetails");
    if (caseStudyDetails.style.display === "none") {
        caseStudyDetails.style.display = "block";
    } else {
        caseStudyDetails.style.display = "none";
    }
});

document.getElementById("toggleRecommendations").addEventListener("click", function () {
    const recommendationDetails = document.getElementById("recommendationDetails");
    if (recommendationDetails.style.display === "none") {
        recommendationDetails.style.display = "block";
    } else {
        recommendationDetails.style.display = "none";
    }
});

---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
display: note
status: sow
cover: hugo-logo-wide.svg
preface: Preface of post
---
<!-- status: sow, grow, mature (completion: sow < grow < mature ) -->

<!----------------------ATTENTION----------------------------

display: blog, cover-link, cover-with, cover-without.

Please follow the specific kind of archetypes in the case of display below:

    case: blog, cover-with, cover-without
        
        `hugo new --kind blog <dir>/<title>`
        eg: hugo new --kind blog essays/database
    
    case: cover-link
        
        `hugo new --kind cover-link <dir>/<title>`
        eg: hugo new --kind cover-link library/database 

------------------------------------------------------------> 

Please start your post here!

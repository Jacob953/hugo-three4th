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

display: note, essay, blog, illustration.

Please follow the specific kind of archetypes in the case of display below:

    case: note, essay, blog
        
        `hugo new --kind post <dir>/<title>`
        eg: hugo new --kind post essays/database
    
    case: illustration
        
        `hugo new --kind illustration <dir>/<title>`
        eg: hugo new --kind illustration library/database 

------------------------------------------------------------> 

Please start your post here!

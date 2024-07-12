import fs from 'fs'
import path from 'path'
function generateRobots(){
    let robotContent=`
    User-agent: * 
    Disallow : /wp-admin
    Crawl-Delay: 20
    Sitemap : https://eligocs.com/sitemap.xml
    `
    fs.writeFileSync(path.resolve('./public/robots.txt'),robotContent)
}

generateRobots()
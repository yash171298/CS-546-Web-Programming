const dbConnection = require('../config/mongoConnection');
const data = require('../data/');
const books = data.books;
const reviews = data.reviews;

async function main() {
  const db = await dbConnection();
  await db.dropDatabase();
    //shining
    const shining = await books.create("The Shining",{authorFirstName: "Stephen", authorLastName: "King"},  ["Novel", "Horror fiction", "Gothic fiction", "Psychological horror", "Occult Fiction"], "1/28/1977", "Jack Torrance’s new job at the Overlook Hotel is the perfect chance for a fresh start. As the off-season caretaker at the atmospheric old hotel, he’ll have plenty of time to spend reconnecting with his family and working on his writing. But as the harsh winter weather sets in, the idyllic location feels ever more remote . . . and more sinister. And the only one to notice the strange and terrible forces gathering around the Overlook is Danny Torrance, a uniquely gifted five-year-old..", )
    const shiningid = shining._id;
    const shiningrev = await reviews.create(shiningid, "This book scared me to death!!", "scaredycat", 5, "10/7/2020", "This book was creepy!!! It had me at the edge of my seat.  One of Stephan King's best works!")
    const shiningrev2 = await reviews.create(shiningid, "This book scafffred me to death!!", "scaredggycat", 5, "10/30/2020", "This book was creepy!!! It had me at the edge of my seat.  One of Stephan King's best works!")
    //thousand
    const thousand = await books.create("THE THOUSAND AUTUMNS OF JACOB DE ZOET",{authorFirstName: "DAVID", authorLastName: "Mitchell"}, ["Novel", "Horror", "History", "show-offy"], "08/02/2010", "It is easier to conjure the intellectual-literary atmosphere of an era when it is 30 years’ past than when it is a mere decade ago. It is hard to see 2010 right now, as we wait for time and the canon to true the lens, but I have a very clear sense-memory of revelation and exhilaration as I sped through David Mitchell’s epic-historical ghost story, The Thousand Autumns of Jacob de Zoet, wondering if the spirit of Robert Louis Stevenson had momentarily taken possession of Haruki Murakami." )
    const thousandid = thousand._id;
    
    // Miss
    const miss = await books.create("Miss Austen", {authorFirstName: "Gill", authorLastName: "Hornby"}, ["Historical", "FictionEuropeUK", "Britain & Ireland17th"], "03/16/2020", "For fans of Jo Baker's Longbourn, a witty, poignant novel about Cassandra Austen and her famous sister, Jane.");
    const missid = miss._id
    const missrev1 = await reviews.create(missid, "BookBrowse", "Sisters", 4,"02/7/2021","Very few relationships come close to the intensity of sisters. If close, there is nothing that can come between them. Such was the case with Cassandra and Jane Austen. Though more of a supporting character in a family with some very colorful.");
    const missrev2 = await reviews.create(missid, "Walk Into an Austen Novel", "Patricia G.", 5, "01/21/2021","Reading this book is like taking a step back in time to Jane Austen's England. As her beloved sister, Cassandra, now an elderly spinster, tries to retrieve old letters to protect Jane's legacy, we follow her into a world with all of the personalities.")
    const missrev3 = await reviews.create(missid, "Great Read", "Kathleen B.", 4, "12/12/2020", "f you are a fan of Jane Austin, I'm sure you will enjoy this book. This book starts out in March of 1840. A family friend has died and his belonging need to be gone through so the house can be emptied.");
    //The Mountains Sing
    const mountains = await books.create("The Mountains Sing",{authorFirstName: "Nguyen", authorLastName: "Phan Que Mai"}, ["Historical", "FictionAsiaSouth-East", "Asia20th Century"], "11/01/2021", "The Mountains Sing tells an enveloping, multigenerational tale of the Trần family, set against the backdrop of the Việt Nam War. Both vast in scope and intimate in its telling ... Moving and riveting. Viet Thanh Nguyen, author of The Sympathizer, winner of the Pulitzer Prize." )
    const mountainsid = mountains._id;
    const mountainsrev1 = await reviews.create(mountainsid,"The Human Side of War", "Lynne Lambert", 5, "03/23/2021", "Viet Nam is a country that knows too well about the subjugation of foreign powers and war. The French, Japanese, and Americans, as well as political factions within their own borders have all taken a toll on the Vietnamese people.")
    //Brood
    const brood = await books.create("Brood", {authorFirstName: "Jackie", authorLastName: "Polzin"}, ["Novels", "USA", "Minn. Wis. Iowa", "Debuts"], "05/11/2019", "An exquisite new literary voice - wryly funny, nakedly honest, beautifully observational, in the vein of Jenny Offill and Elizabeth Strout - depicts one woman's attempt to keep her four chickens alive while reflecting on a recent loss.")
    const broodid = brood._id;
    const broodrev1 = await reviews.create(broodid, "bittersweet tone", "BookBrowse", 3, "10/05/2020", "It's not for those who need a lot of plot, or who don't like the feeling that information is being withheld; events have surface meaning, and could also be interpreted allegorically, but ultimately, it surprised me to what extent the book really is about chickens.")
    const broodrev2 = await reviews.create(broodid, "Olivia Laing and Jenny Offill", "Kirkus Reviews", 4, "06/21/2018", "Calling to mind the cerebral works of Olivia Laing and Jenny Offill, Polzin's story has a quiet intensity that churns throughout...In Polzin's deft hands, the mundane is an endless source of wonder. A moving meditation on loss, solitude, and the hope that can rise from both.")
    //The Phone Booth at the Edge of the World
    const phone = await books.create("The Phone Booth at the Edge of the World", {authorFirstName: "Laura", authorLastName: "Imai Messina"}, ["Novels", "Uplifting", "novelsAsiaEast", "Asia"], "12/15/2018", "The international bestselling novel sold in 21 countries, about grief, mourning, and the joy of survival, inspired by a real phone booth in Japan with its disconnected wind phone, a place of pilgrimage and solace since the 2011 tsunami.");
    const phoneid = phone._id;
    const phonerev1 = await reviews.create(phoneid, "The fragility of life helps to write your story", "Toni B", 3, "01/01/2020", "Thank you to NetGalley for an ARC of The Phone Booth at the Edge of the World by Laura Imai Messina which is a fictional tale based on the real Wind phone in Japan.  ... life decays, countless cracks form over time.")
    //Master Class
    const master = await books.create("Master Class", {authorFirstName: "Christina", authorLastName: "Dalcher"}, ["Speculative", "Sci-Fi", "Fantasy", "Alt. HistoryUSAThe", "Future"], "09/09/2017", "From the critically-acclaimed author of the international bestseller VOX comes a suspenseful new novel that examines a disturbing near future where harsh realities follow from unreachable standards.")
    const masterid = master._id;
    const masterrev1 = await reviews.create(masterid,"Christina Dalcher's Master Class", "Yash Patole", 5, "12/17/2020", "The story of Elena's journey confidently functions as both an assured dystopian thriller and a meticulously constructed socio-political cautionary tale. Fans of The Handmaid's Tale, and of dystopian fiction generally, will find much to please them in this impressive story of self-determination under pressure to conform.")
    //The Illness Lesson
    const lesson = await books.create("The Illness Lesson", {authorFirstName: "Clare", authorLastName: "Beams"}, ["Historical", "Fiction", "USA", "Mass", "19th Century"], "05/25/2020", "Sarah Waters meets Red Clocks in this searing novel, set at an all-girl school in 19th century Massachusetts, which probes the timeless question: who gets to control a woman's body and why.");
    const lessonid = lesson._id;
    const lessonrev1 = await reviews.create(lessonid, "clever critique of the paternalism", "Rutuja", 4, "02/02/2019", "The novel is a clever critique of the paternalism and subtle condescension often present just below the surface of supposedly forward-thinking men.");
    //Windhall
    const windhall = await books.create("Windhall", {authorFirstName: "Ava", authorLastName: "Barry"}, ["Mysteries", "USA", "California", "1940s & '50s"], "12/17/2018", "A stunning literary thriller in which an investigative journalist in modern Los Angeles attempts to solve the Golden Age murder of a Hollywood starlet.");
    const windhallid = windhall._id;
    const windhallrev1 = await reviews.create(windhallid, "Windhall is a fast-paced", "Anish Malhotra", 3, "11/27/2017", "Cleverly-plotted murder mystery that exalts the opulence of Hollywood's Golden Age while also exposing the dark side of the studios and the damaging, sometimes deadly, consequences to those who defied the powerful elites.")
    //Fortune Favors the Dead
    const favors = await books.create("Fortune Favors the Dead", {authorFirstName: " Stephen", authorLastName: "Spotswood"}, ["Mysteries", "USA", "Northeast", "NY State"], "10/15/2017", "A wildly charming and fast-paced mystery written with all the panache of the hardboiled classics, Fortune Favors the Dead introduces Pentecost and Parker, an audacious new detective duo for the ages.");
    const favorsid = favors._id
    const favorsrev1 = await reviews.create(favorsid, "Detective with a twist", "yash avinash", 5, "01/07/2021", "I just finished reading this book and loved it. Wasn't quite sure what to expect. Women detectives - one who lived with a circus for many years - it was a little different and interesting. Would highly recommend it.")
    console.log('Done seeding database');

    await db.serverConfig.close();
}
main();
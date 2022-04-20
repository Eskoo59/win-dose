let chiffre = 10956



do{
    fin=parseInt(prompt("donne un chiffre"))
    if(fin>chiffre){
        console.log("le chiffre est trop bas")
    }else if (fin<chiffre){
        console.log("le chiffre est trop haut")
    }else console.log("c'est gagné !" )
    }while(chiffre!=fin)
    
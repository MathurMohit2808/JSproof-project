/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const Bank = []; // Array named Bank will hold our nft's that will be the accounts which is our demo nft

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

// Here we have a account as a object and it will contain the details of the account holder 
// like 1. id, 2. name, 3. amount available in the account, 4. year in which the account was created
function mintNFT (_holderid, _holdername, _amount, _year) 
{
    const Account =  
    {
        "Holder Id" : _holderid,
        "Holder Name" : _holdername,
        "Amount" : _amount,
        "Year of Creation" : _year 
    }; // account is our demo nft's as it is unique for all acounts

    Bank.push(Account); //Here push function is used to add the account
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i = 0; i <= (Bank.length - 1); i++) //creating a for loop to get the details of the Accounts available in the bank
    {
        console.log("Details of the Account " + (i+1) + ":");
        console.log("Id: " + Bank[i]["Holder Id"] + "\n" +
                    "Name: " + Bank[i]["Holder Name"] + "\n" +
                    "Current Amount: Rs." + Bank[i].Amount + "\n" +
                    "Year of Account Creation: " + Bank[i]["Year of Creation"] + "\n" //here to access object values we have used
                                                                             //bracket notation as properties have spaces
        );
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total number of account present in the bank are: " + Bank.length); // length function will help us to get number of nfts or number of accounts in the bank
}

// call your functions below this line
mintNFT(214, "Saleem Ahmed", "10,000", 2014); // Here we are passing the account details of various account holders as arguments in function calling
mintNFT(215, "Jack Forest", "90,512", 2015);
mintNFT(216, "Amit Singh", "16,813", 2018);
listNFTs();
getTotalSupply();

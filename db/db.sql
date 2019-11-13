drop database if exists swapz;
create database swapz;
use swapz;

create table user (
		UserID integer auto_increment primary key,
        FirstName varchar(50) not null,
        LastName varchar(50) not null,
        Email varchar(50) not null,
        Mobile integer(10),
        HomeAddress text(500),
		PostalAddress varchar(50),
		Password varchar(20)
);

create table category (
		CategoryID integer auto_increment primary key,
		Name varchar(50)
);

create table wish (
		WishID integer auto_increment primary key,
        CategoryID integer not null,
        Name varchar(50) not null,
        Status varchar(50),
        UserID integer,
        FOREIGN KEY (UserID) REFERENCES user(UserID),
        FOREIGN KEY (CategoryID) REFERENCES category(CategoryID)
);

create table item (
        ItemID integer auto_increment primary key,
        CategoryID integer not null,
        Name varchar(50) not null,
        Description varchar(5000) not null,
        Status varchar(50),
        EstimateValue decimal(65,2),
        DateAdded date,
        UserID integer,
        FOREIGN KEY (UserID) REFERENCES user(UserID)
);

create table image (
        ImageID integer auto_increment primary key,
        ItemID integer ,
        URL varchar(5000) not null,
        DateAdded date,
        FOREIGN KEY (ItemID) REFERENCES item(ItemID)
);

create table listing(
		ListingID integer auto_increment primary key,
		Title varchar(50) not null,
		Status varchar(50),
		EstimateValue decimal(65,2),
		DateAdded date,
		UserID integer,
        Foreign key (UserID) REFERENCES user(UserID)
);

create table Item_Listing (
		ID integer auto_increment primary key,
        ListingID integer,
        ItemID integer,
		FOREIGN KEY (ListingID) REFERENCES listing(ListingID),
		FOREIGN KEY (ItemID) REFERENCES item(ItemID)
);

create table exchange_flow(
		ExchangeFlowID integer auto_increment primary key,
        ItemID_A  integer not null,
        ItemID_B integer not null,
  		FOREIGN KEY (ItemID_A) REFERENCES item(ItemID),
		FOREIGN KEY (ItemID_B) REFERENCES item(ItemID)  
);

create table `order` (
		OrderID integer auto_increment primary key,	
        ExChangeFlowID integer,
        Status varchar(50),
        `Date` date,
  		FOREIGN KEY (ExChangeFlowID) REFERENCES exchange_flow(ExchangeFlowID)        
);




	





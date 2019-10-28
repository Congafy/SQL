USE [master]
GO
/****** Object:  Database [2014_servisni_web_com]    Script Date: 21-05-2019 12:00:07 ******/
CREATE DATABASE [2014_servisni_web_com]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'reklamace_cembrit_cz_Data', FILENAME = N'E:\MSSQL12.MSSQLSERVER\MSSQL\DATA\2014_servisni_web_com.MDF' , SIZE = 1723072KB , MAXSIZE = UNLIMITED, FILEGROWTH = 10%)
 LOG ON 
( NAME = N'reklamace_cembrit_cz_Log', FILENAME = N'F:\MSSQL12.MSSQLSERVER\MSSQL\Data\2014_servisni_web_com_1.LDF' , SIZE = 9216KB , MAXSIZE = UNLIMITED, FILEGROWTH = 10%)
GO
ALTER DATABASE [2014_servisni_web_com] SET COMPATIBILITY_LEVEL = 100
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [2014_servisni_web_com].[dbo].[sp_fulltext_database] @action = 'disable'
end
GO
ALTER DATABASE [2014_servisni_web_com] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [2014_servisni_web_com] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [2014_servisni_web_com] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [2014_servisni_web_com] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [2014_servisni_web_com] SET ARITHABORT OFF 
GO
ALTER DATABASE [2014_servisni_web_com] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [2014_servisni_web_com] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [2014_servisni_web_com] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [2014_servisni_web_com] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [2014_servisni_web_com] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [2014_servisni_web_com] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [2014_servisni_web_com] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [2014_servisni_web_com] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [2014_servisni_web_com] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [2014_servisni_web_com] SET  DISABLE_BROKER 
GO
ALTER DATABASE [2014_servisni_web_com] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [2014_servisni_web_com] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [2014_servisni_web_com] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [2014_servisni_web_com] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [2014_servisni_web_com] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [2014_servisni_web_com] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [2014_servisni_web_com] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [2014_servisni_web_com] SET RECOVERY FULL 
GO
ALTER DATABASE [2014_servisni_web_com] SET  MULTI_USER 
GO
ALTER DATABASE [2014_servisni_web_com] SET PAGE_VERIFY TORN_PAGE_DETECTION  
GO
ALTER DATABASE [2014_servisni_web_com] SET DB_CHAINING OFF 
GO
ALTER DATABASE [2014_servisni_web_com] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [2014_servisni_web_com] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
ALTER DATABASE [2014_servisni_web_com] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'2014_servisni_web_com', N'ON'
GO
USE [2014_servisni_web_com]
GO
/****** Object:  User [wenison]    Script Date: 21-05-2019 12:00:07 ******/
CREATE USER [wenison] WITHOUT LOGIN WITH DEFAULT_SCHEMA=[wenison]
GO
/****** Object:  User [reklamace_cembrit_cz]    Script Date: 21-05-2019 12:00:07 ******/
CREATE USER [reklamace_cembrit_cz] WITHOUT LOGIN WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_owner] ADD MEMBER [wenison]
GO
ALTER ROLE [db_datareader] ADD MEMBER [reklamace_cembrit_cz]
GO
ALTER ROLE [db_datawriter] ADD MEMBER [reklamace_cembrit_cz]
GO
/****** Object:  Schema [wenison]    Script Date: 21-05-2019 12:00:07 ******/
CREATE SCHEMA [wenison]
GO
/****** Object:  Table [dbo].[_aaa_L2_L1_to_L3]    Script Date: 21-05-2019 12:00:07 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_aaa_L2_L1_to_L3](
	[comId] [int] NOT NULL,
	[def_old] [varchar](20) NOT NULL,
	[def_new] [varchar](20) NOT NULL,
	[def_product] [varchar](500) NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_aaa_prodtype_color]    Script Date: 21-05-2019 12:00:07 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_aaa_prodtype_color](
	[prodtype] [varchar](5) NOT NULL,
	[color] [varchar](5) NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_badComplaintGood]    Script Date: 21-05-2019 12:00:07 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_badComplaintGood](
	[comID] [float] NULL,
	[comCode] [nvarchar](255) NULL,
	[com_f2_local_ident] [nvarchar](255) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_Code]    Script Date: 21-05-2019 12:00:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_Code](
	[D01] [nvarchar](255) NULL,
	[manko] [nvarchar](255) NULL,
	[deficiency] [nvarchar](255) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_completeExport]    Script Date: 21-05-2019 12:00:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_completeExport](
	[comID] [float] NULL,
	[comCode] [nvarchar](255) NULL,
	[COPID] [float] NULL,
	[proId] [float] NULL,
	[proCode] [nvarchar](255) NULL,
	[pro_name] [nvarchar](255) NULL,
	[cop_cbo_cmo] [float] NULL,
	[cmoName] [nvarchar](255) NULL,
	[cop_count] [float] NULL,
	[cop_bad_count] [float] NULL,
	[CPD_ID] [float] NULL,
	[cpd_defect_fk] [float] NULL,
	[def_code] [nvarchar](255) NULL,
	[defName] [nvarchar](255) NULL,
	[cpd_count] [float] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_completeExport(2005_01_10)]    Script Date: 21-05-2019 12:00:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_completeExport(2005_01_10)](
	[comID] [float] NULL,
	[comCode] [nvarchar](255) NULL,
	[COPID] [float] NULL,
	[proId] [float] NULL,
	[proCode] [nvarchar](255) NULL,
	[pro_name] [nvarchar](255) NULL,
	[cop_cbo_cmo] [float] NULL,
	[cmoName] [nvarchar](255) NULL,
	[cop_count] [float] NULL,
	[cop_bad_count] [float] NULL,
	[CPD_ID] [float] NULL,
	[cpd_defect_fk] [float] NULL,
	[def_code] [nvarchar](255) NULL,
	[defName] [nvarchar](255) NULL,
	[cpd_count] [float] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_cz_naklady_2015]    Script Date: 21-05-2019 12:00:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_cz_naklady_2015](
	[dokl] [varchar](50) NULL,
	[castka] [decimal](18, 2) NULL,
	[idr] [varchar](50) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_Defect]    Script Date: 21-05-2019 12:00:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_Defect](
	[kód] [nvarchar](255) NULL,
	[vada] [nvarchar](255) NULL,
	[F3] [nvarchar](255) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_defk20]    Script Date: 21-05-2019 12:00:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_defk20](
	[comid] [int] NULL,
	[def] [varchar](50) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_delaxprice]    Script Date: 21-05-2019 12:00:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_delaxprice](
	[comId] [int] NULL,
	[price] [decimal](18, 10) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_DK_IMPORT]    Script Date: 21-05-2019 12:00:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_DK_IMPORT](
	[DATASET] [nvarchar](20) NULL,
	[ROWNUMBER] [bigint] NULL,
	[LASTCHANGED] [datetime] NULL,
	[REKLAMATIONSNR] [varchar](50) NULL,
	[NAVN] [nvarchar](255) NULL,
	[NAVN_DK] [nvarchar](255) NULL,
	[SXGENAVN] [nvarchar](255) NULL,
	[ADRESSE1] [nvarchar](255) NULL,
	[ADRESSE1_DK] [nvarchar](255) NULL,
	[ADRESSE2] [nvarchar](255) NULL,
	[ADRESSE2_DK] [nvarchar](255) NULL,
	[POSTNR] [nvarchar](50) NULL,
	[ADRESSE3] [nvarchar](255) NULL,
	[ADRESSE3_DK] [nvarchar](255) NULL,
	[TLFNR1] [nvarchar](255) NULL,
	[EJENDOMSTYPE] [nvarchar](255) NULL,
	[LAND] [nvarchar](255) NULL,
	[REKLGRUPPE] [nvarchar](255) NULL,
	[OPRETTET] [datetime] NULL,
	[BESIGTIGET] [datetime] NULL,
	[AFSLUTNINGSDATO] [datetime] NULL,
	[KONKLUSION] [nvarchar](20) NULL,
	[HXNDVXRKER] [int] NULL,
	[FORHANDLER] [int] NULL,
	[PRODUKTTYPE] [nvarchar](20) NULL,
	[FARVE] [nvarchar](20) NULL,
	[RYGNINGSTYPE] [nvarchar](50) NULL,
	[TAGHXLDNING] [int] NULL,
	[PRODUKTIONSNR] [nvarchar](255) NULL,
	[REKLPLADER] [int] NULL,
	[ANTALRYGNINGER] [int] NULL,
	[TOTALPLADER] [int] NULL,
	[FEJLTYPE] [nvarchar](255) NULL,
	[ADVOKAT] [nvarchar](255) NULL,
	[RETSLIGSYNSKXN] [datetime] NULL,
	[AFSLUTTET] [int] NULL,
	[LXNGDEDELETED] [int] NULL,
	[HENSXTTELSESDATO] [datetime] NULL,
	[OPLAGTDATO] [datetime] NULL,
	[USERIDSLETTET] [int] NULL,
	[BREV] [int] NULL,
	[SKADESGRADKANT] [int] NULL,
	[SKADESGRADTOP] [int] NULL,
	[CHECKBELXB] [float] NULL,
	[JOURNALNR] [nvarchar](255) NULL,
	[GLBBTNR] [nvarchar](255) NULL,
	[KONTROLKODE] [int] NULL,
	[ANLXG] [int] NULL,
	[PRODXR] [int] NULL,
	[NYTBBTNR] [nvarchar](255) NULL,
	[RYGNPRODNR] [nvarchar](255) NULL,
	[TLFNR2] [nvarchar](255) NULL,
	[GENOPRETDATO] [datetime] NULL,
	[KONTAKTATFORHANDLER] [nvarchar](255) NULL,
	[RETSAGSNR] [nvarchar](255) NULL,
	[KORRNAVN] [nvarchar](255) NULL,
	[KORRADRESSE1] [nvarchar](255) NULL,
	[KORRADRESSE2] [nvarchar](255) NULL,
	[KORRPOSTNR] [nvarchar](255) NULL,
	[KORRADRESSE3] [nvarchar](255) NULL,
	[ADVOKATMEDSAGSXGT] [nvarchar](255) NULL,
	[GFKNR] [nvarchar](255) NULL,
	[KULANCEFORHANDLER] [nvarchar](255) NULL,
	[MODTAGETFRA] [int] NULL,
	[MEDSAGSXGTJOURNR] [nvarchar](255) NULL,
	[SAGSBEHANDLER] [nvarchar](10) NULL,
	[INVOICEACCOUNTDEL] [nvarchar](255) NULL,
	[BRUGERID] [nvarchar](50) NULL,
	[WRKNAME] [nvarchar](255) NULL,
	[WRKNAME2] [nvarchar](255) NULL,
	[WRKADDRESS1] [nvarchar](255) NULL,
	[WRKADDRESS2] [nvarchar](255) NULL,
	[WRKADDRESS3] [nvarchar](255) NULL,
	[WRKZIP] [nvarchar](50) NULL,
	[WRKREGION] [nvarchar](255) NULL,
	[WRKCOUNTRY] [nvarchar](255) NULL,
	[WRKATTENTION] [nvarchar](255) NULL,
	[LANGUAGE_CODE] [int] NULL,
	[BREVDATO] [nvarchar](255) NULL,
	[FORFATTER] [nvarchar](50) NULL,
	[UNDERSKRIVER] [nvarchar](50) NULL,
	[LXNGDE] [nvarchar](255) NULL,
	[ADVOKATKONTAKT] [nvarchar](255) NULL,
	[RYGNFEJL] [nvarchar](255) NULL,
	[GFKNRNYT] [nvarchar](255) NULL,
	[MALEDATO] [datetime] NULL,
	[LEVERANDXR] [bigint] NULL,
	[LEVNAVN] [nvarchar](255) NULL,
	[ACCEPTKODE] [int] NULL,
	[FEJLTYPE2] [nvarchar](255) NULL,
	[produkttype2] [nvarchar](255) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_DK_IMPORT_ACESSORIES]    Script Date: 21-05-2019 12:00:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_DK_IMPORT_ACESSORIES](
	[AX code] [nvarchar](255) NULL,
	[Old CIM Number 1] [nvarchar](255) NULL,
	[Product name] [nvarchar](255) NULL,
	[Search name] [nvarchar](255) NULL,
	[Producer] [nvarchar](255) NULL,
	[Group color code] [nvarchar](255) NULL,
	[Producer2] [nvarchar](255) NULL,
	[Group color code2] [nvarchar](255) NULL,
	[Product type] [nvarchar](255) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_DK_IMPORT_ACESSORIES_ONLY]    Script Date: 21-05-2019 12:00:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_DK_IMPORT_ACESSORIES_ONLY](
	[code] [varchar](50) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_DK_IMPORT_ACESSORIES_S]    Script Date: 21-05-2019 12:00:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_DK_IMPORT_ACESSORIES_S](
	[sname] [nvarchar](258) NULL,
	[ID] [int] IDENTITY(1084,1) NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_DK_IMPORT_BUILDING]    Script Date: 21-05-2019 12:00:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_DK_IMPORT_BUILDING](
	[name] [nvarchar](255) NULL,
	[ITMID] [int] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_DK_IMPORT_CBO]    Script Date: 21-05-2019 12:00:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_DK_IMPORT_CBO](
	[name] [nvarchar](255) NULL,
	[id] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_DK_IMPORT_COUNTRY]    Script Date: 21-05-2019 12:00:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_DK_IMPORT_COUNTRY](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](200) NULL,
	[country_fk] [int] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_DK_IMPORT_DISTRIB]    Script Date: 21-05-2019 12:00:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_DK_IMPORT_DISTRIB](
	[Acc] [bigint] NULL,
	[name] [nvarchar](255) NULL,
	[name_DK] [nvarchar](255) NULL,
	[invAcc] [bigint] NULL,
	[Street] [nvarchar](255) NULL,
	[Street_DK] [nvarchar](255) NULL,
	[zip] [nvarchar](255) NULL,
	[City] [nvarchar](255) NULL,
	[City_DK] [nvarchar](255) NULL,
	[State] [nvarchar](255) NULL,
	[country] [nvarchar](255) NULL,
	[Phone] [nvarchar](255) NULL,
	[Mail] [nvarchar](255) NULL,
	[stats] [nvarchar](255) NULL,
	[Currency] [nvarchar](255) NULL,
	[seal] [nvarchar](255) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_DK_IMPORT_PRODUCT]    Script Date: 21-05-2019 12:00:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_DK_IMPORT_PRODUCT](
	[CIMnr] [nvarchar](255) NULL,
	[AXnr] [nvarchar](255) NULL,
	[AXproductname] [nvarchar](255) NULL,
	[AXunit] [nvarchar](255) NULL,
	[DBnr] [bigint] NULL,
	[SDKitemcode] [bigint] NULL,
	[producttype] [nvarchar](255) NULL,
	[colour] [nvarchar](255) NULL,
	[sloupecX] [nvarchar](255) NULL,
	[produkttype] [nvarchar](255) NULL,
	[F11] [nvarchar](255) NULL,
	[F12] [nvarchar](255) NULL,
	[productfk] [int] NULL,
	[id] [int] IDENTITY(1,1) NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_DK_IMPORT_PRODUCT2]    Script Date: 21-05-2019 12:00:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_DK_IMPORT_PRODUCT2](
	[clr] [varchar](50) NULL,
	[typ] [varchar](50) NULL,
	[kod] [varchar](50) NULL,
	[productfk] [int] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_DK_IMPORT_PRODUCTNAME]    Script Date: 21-05-2019 12:00:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_DK_IMPORT_PRODUCTNAME](
	[AX code] [nvarchar](255) NULL,
	[Old CIM Number 1] [nvarchar](255) NULL,
	[Danish product name] [nvarchar](255) NULL,
	[Group Search name] [nvarchar](255) NULL,
	[Producer] [nvarchar](255) NULL,
	[Unit sequence group ID] [nvarchar](255) NULL,
	[Language] [nvarchar](255) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_DK_IMPORT_produktyzaloha]    Script Date: 21-05-2019 12:00:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_DK_IMPORT_produktyzaloha](
	[COP_CRDATE] [datetime] NOT NULL,
	[COP_MODDATE] [datetime] NOT NULL,
	[COP_CRUSER] [int] NOT NULL,
	[COP_MODUSER] [int] NOT NULL,
	[COP_ID] [int] IDENTITY(100000,1) NOT NULL,
	[COP_PRODUCT_FK] [int] NOT NULL,
	[COP_COMPLAINT_FK] [int] NOT NULL,
	[COP_DATE_LOCAL] [datetime] NULL,
	[COP_ON_OBJECT] [bit] NOT NULL,
	[COP_ADVANCED] [bit] NOT NULL,
	[COP_PRODUCT_TYPE_AC] [bit] NOT NULL,
	[COP_PRODUCT_TYPE_NT] [bit] NOT NULL,
	[COP_PRODUCT_TYPE_LH] [bit] NOT NULL,
	[COP_PRODUCT_TYPE_OT] [bit] NULL,
	[COP_KIND] [varchar](100) NULL,
	[COP_COUNT] [int] NULL,
	[COP_BAD_COUNT] [int] NULL,
	[COP_COLOR_FK] [int] NULL,
	[COP_ROOF_AREA] [int] NULL,
	[COP_SERIAL] [varchar](200) NULL,
	[COP_CBO_CMO] [int] NULL,
	[COP_STAT_PERCENT_COUNT] [decimal](10, 2) NOT NULL,
	[COP_DEFECT_FK] [int] NULL,
	[COP_DEFECT_COUNT] [int] NULL,
	[COP_ORIGINAL_FK] [int] NULL,
	[COP_QM_ACTIVE] [int] NOT NULL,
	[COP_QM_NOTE] [varchar](max) NULL,
	[COP_MAIN] [bit] NOT NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_DK_IMPORT_produktyzaloha2]    Script Date: 21-05-2019 12:00:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_DK_IMPORT_produktyzaloha2](
	[COP_CRDATE] [datetime] NOT NULL,
	[COP_MODDATE] [datetime] NOT NULL,
	[COP_CRUSER] [int] NOT NULL,
	[COP_MODUSER] [int] NOT NULL,
	[COP_ID] [int] IDENTITY(100000,1) NOT NULL,
	[COP_PRODUCT_FK] [int] NOT NULL,
	[COP_COMPLAINT_FK] [int] NOT NULL,
	[COP_DATE_LOCAL] [datetime] NULL,
	[COP_ON_OBJECT] [bit] NOT NULL,
	[COP_ADVANCED] [bit] NOT NULL,
	[COP_PRODUCT_TYPE_AC] [bit] NOT NULL,
	[COP_PRODUCT_TYPE_NT] [bit] NOT NULL,
	[COP_PRODUCT_TYPE_LH] [bit] NOT NULL,
	[COP_PRODUCT_TYPE_OT] [bit] NULL,
	[COP_KIND] [varchar](100) NULL,
	[COP_COUNT] [int] NULL,
	[COP_BAD_COUNT] [int] NULL,
	[COP_COLOR_FK] [int] NULL,
	[COP_ROOF_AREA] [int] NULL,
	[COP_SERIAL] [varchar](200) NULL,
	[COP_CBO_CMO] [int] NULL,
	[COP_STAT_PERCENT_COUNT] [decimal](10, 2) NOT NULL,
	[COP_DEFECT_FK] [int] NULL,
	[COP_DEFECT_COUNT] [int] NULL,
	[COP_ORIGINAL_FK] [int] NULL,
	[COP_QM_ACTIVE] [int] NOT NULL,
	[COP_QM_NOTE] [varchar](max) NULL,
	[COP_MAIN] [bit] NOT NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_DK_IMPORT_produktyzaloha3]    Script Date: 21-05-2019 12:00:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_DK_IMPORT_produktyzaloha3](
	[COP_CRDATE] [datetime] NOT NULL,
	[COP_MODDATE] [datetime] NOT NULL,
	[COP_CRUSER] [int] NOT NULL,
	[COP_MODUSER] [int] NOT NULL,
	[COP_ID] [int] IDENTITY(100000,1) NOT NULL,
	[COP_PRODUCT_FK] [int] NOT NULL,
	[COP_COMPLAINT_FK] [int] NOT NULL,
	[COP_DATE_LOCAL] [datetime] NULL,
	[COP_ON_OBJECT] [bit] NOT NULL,
	[COP_ADVANCED] [bit] NOT NULL,
	[COP_PRODUCT_TYPE_AC] [bit] NOT NULL,
	[COP_PRODUCT_TYPE_NT] [bit] NOT NULL,
	[COP_PRODUCT_TYPE_LH] [bit] NOT NULL,
	[COP_PRODUCT_TYPE_OT] [bit] NULL,
	[COP_KIND] [varchar](100) NULL,
	[COP_COUNT] [int] NULL,
	[COP_BAD_COUNT] [int] NULL,
	[COP_COLOR_FK] [int] NULL,
	[COP_ROOF_AREA] [int] NULL,
	[COP_SERIAL] [varchar](200) NULL,
	[COP_CBO_CMO] [int] NULL,
	[COP_STAT_PERCENT_COUNT] [decimal](10, 2) NOT NULL,
	[COP_DEFECT_FK] [int] NULL,
	[COP_DEFECT_COUNT] [int] NULL,
	[COP_ORIGINAL_FK] [int] NULL,
	[COP_QM_ACTIVE] [int] NOT NULL,
	[COP_QM_NOTE] [varchar](max) NULL,
	[COP_MAIN] [bit] NOT NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_DK_IMPORT_produktyzaloha4]    Script Date: 21-05-2019 12:00:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_DK_IMPORT_produktyzaloha4](
	[COP_CRDATE] [datetime] NOT NULL,
	[COP_MODDATE] [datetime] NOT NULL,
	[COP_CRUSER] [int] NOT NULL,
	[COP_MODUSER] [int] NOT NULL,
	[COP_ID] [int] IDENTITY(100000,1) NOT NULL,
	[COP_PRODUCT_FK] [int] NOT NULL,
	[COP_COMPLAINT_FK] [int] NOT NULL,
	[COP_DATE_LOCAL] [datetime] NULL,
	[COP_ON_OBJECT] [bit] NOT NULL,
	[COP_ADVANCED] [bit] NOT NULL,
	[COP_PRODUCT_TYPE_AC] [bit] NOT NULL,
	[COP_PRODUCT_TYPE_NT] [bit] NOT NULL,
	[COP_PRODUCT_TYPE_LH] [bit] NOT NULL,
	[COP_PRODUCT_TYPE_OT] [bit] NULL,
	[COP_KIND] [varchar](100) NULL,
	[COP_COUNT] [int] NULL,
	[COP_BAD_COUNT] [int] NULL,
	[COP_COLOR_FK] [int] NULL,
	[COP_ROOF_AREA] [int] NULL,
	[COP_SERIAL] [varchar](200) NULL,
	[COP_CBO_CMO] [int] NULL,
	[COP_STAT_PERCENT_COUNT] [decimal](10, 2) NOT NULL,
	[COP_DEFECT_FK] [int] NULL,
	[COP_DEFECT_COUNT] [int] NULL,
	[COP_ORIGINAL_FK] [int] NULL,
	[COP_QM_ACTIVE] [int] NOT NULL,
	[COP_QM_NOTE] [varchar](max) NULL,
	[COP_MAIN] [bit] NOT NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_DK_IMPORT_REALIZ]    Script Date: 21-05-2019 12:00:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_DK_IMPORT_REALIZ](
	[DATASET] [varchar](255) NULL,
	[ROWNUMBER] [bigint] NULL,
	[LASTCHANGED] [datetime] NULL,
	[NUMBER_] [nvarchar](255) NULL,
	[NAME] [nvarchar](255) NULL,
	[NAME_DK] [nvarchar](255) NULL,
	[NAME2] [nvarchar](255) NULL,
	[NAME2_DK] [nvarchar](255) NULL,
	[ADDRESS1] [nvarchar](255) NULL,
	[ADDRESS2] [nvarchar](255) NULL,
	[ADDRESS3] [nvarchar](255) NULL,
	[ADDRESS1_DK] [nvarchar](255) NULL,
	[ADDRESS2_DK] [nvarchar](255) NULL,
	[ADDRESS3_DK] [nvarchar](255) NULL,
	[ZIP] [nvarchar](255) NULL,
	[COUNTRY] [nvarchar](255) NULL,
	[ATTENTION] [nvarchar](255) NULL,
	[SEARCHNAME] [nvarchar](255) NULL,
	[PHONE] [nvarchar](255) NULL,
	[FAX] [nvarchar](255) NULL,
	[MOBIL] [nvarchar](255) NULL,
	[EMAIL] [nvarchar](255) NULL,
	[PHONE$] [nvarchar](255) NULL,
	[NAME$] [nvarchar](255) NULL,
	[NAME2$] [nvarchar](255) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_DK_IMPORT_REALIZ_OLD]    Script Date: 21-05-2019 12:00:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_DK_IMPORT_REALIZ_OLD](
	[DATASET] [varchar](255) NULL,
	[ROWNUMBER] [bigint] NULL,
	[LASTCHANGED] [datetime] NULL,
	[NUMBER_] [varchar](255) NULL,
	[NAME] [varchar](255) NULL,
	[NAME2] [varchar](255) NULL,
	[ADDRESS1] [varchar](255) NULL,
	[ADDRESS2] [varchar](255) NULL,
	[ADDRESS3] [varchar](255) NULL,
	[ZIP] [varchar](255) NULL,
	[COUNTRY] [varchar](255) NULL,
	[ATTENTION] [varchar](255) NULL,
	[SEARCHNAME] [varchar](255) NULL,
	[PHONE] [varchar](255) NULL,
	[FAX] [varchar](255) NULL,
	[MOBIL] [varchar](255) NULL,
	[EMAIL] [varchar](255) NULL,
	[PHONE$] [varchar](255) NULL,
	[NAME$] [varchar](255) NULL,
	[NAME2$] [varchar](255) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_DK_IMPORT_TECH]    Script Date: 21-05-2019 12:00:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_DK_IMPORT_TECH](
	[id] [bigint] NULL,
	[techcode] [varchar](50) NULL,
	[techName] [varchar](200) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_DK_IMPORT2]    Script Date: 21-05-2019 12:00:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_DK_IMPORT2](
	[DATASET] [nvarchar](20) NULL,
	[ROWNUMBER] [bigint] NULL,
	[LASTCHANGED] [datetime] NULL,
	[REKLAMATIONSNR] [varchar](50) NULL,
	[NAVN] [nvarchar](255) NULL,
	[SXGENAVN] [nvarchar](255) NULL,
	[ADRESSE1] [nvarchar](255) NULL,
	[ADRESSE2] [nvarchar](255) NULL,
	[POSTNR] [nvarchar](50) NULL,
	[ADRESSE3] [nvarchar](255) NULL,
	[TLFNR1] [nvarchar](255) NULL,
	[EJENDOMSTYPE] [nvarchar](255) NULL,
	[LAND] [nvarchar](255) NULL,
	[REKLGRUPPE] [nvarchar](255) NULL,
	[OPRETTET] [datetime] NULL,
	[BESIGTIGET] [datetime] NULL,
	[AFSLUTNINGSDATO] [datetime] NULL,
	[KONKLUSION] [nvarchar](20) NULL,
	[HXNDVXRKER] [int] NULL,
	[FORHANDLER] [int] NULL,
	[PRODUKTTYPE] [nvarchar](20) NULL,
	[FARVE] [nvarchar](20) NULL,
	[RYGNINGSTYPE] [nvarchar](50) NULL,
	[TAGHXLDNING] [int] NULL,
	[PRODUKTIONSNR] [nvarchar](255) NULL,
	[REKLPLADER] [int] NULL,
	[ANTALRYGNINGER] [int] NULL,
	[TOTALPLADER] [int] NULL,
	[FEJLTYPE] [nvarchar](255) NULL,
	[ADVOKAT] [nvarchar](255) NULL,
	[RETSLIGSYNSKXN] [datetime] NULL,
	[AFSLUTTET] [int] NULL,
	[LXNGDEDELETED] [int] NULL,
	[HENSXTTELSESDATO] [datetime] NULL,
	[OPLAGTDATO] [datetime] NULL,
	[USERIDSLETTET] [int] NULL,
	[BREV] [int] NULL,
	[SKADESGRADKANT] [int] NULL,
	[SKADESGRADTOP] [int] NULL,
	[CHECKBELXB] [float] NULL,
	[JOURNALNR] [nvarchar](255) NULL,
	[GLBBTNR] [nvarchar](255) NULL,
	[KONTROLKODE] [int] NULL,
	[ANLXG] [int] NULL,
	[PRODXR] [int] NULL,
	[NYTBBTNR] [nvarchar](255) NULL,
	[RYGNPRODNR] [nvarchar](255) NULL,
	[TLFNR2] [nvarchar](255) NULL,
	[GENOPRETDATO] [datetime] NULL,
	[KONTAKTATFORHANDLER] [nvarchar](255) NULL,
	[RETSAGSNR] [nvarchar](255) NULL,
	[KORRNAVN] [nvarchar](255) NULL,
	[KORRADRESSE1] [nvarchar](255) NULL,
	[KORRADRESSE2] [nvarchar](255) NULL,
	[KORRPOSTNR] [nvarchar](255) NULL,
	[KORRADRESSE3] [nvarchar](255) NULL,
	[ADVOKATMEDSAGSXGT] [nvarchar](255) NULL,
	[GFKNR] [nvarchar](255) NULL,
	[KULANCEFORHANDLER] [nvarchar](255) NULL,
	[MODTAGETFRA] [int] NULL,
	[MEDSAGSXGTJOURNR] [nvarchar](255) NULL,
	[SAGSBEHANDLER] [nvarchar](10) NULL,
	[INVOICEACCOUNTDEL] [nvarchar](255) NULL,
	[BRUGERID] [nvarchar](50) NULL,
	[WRKNAME] [nvarchar](255) NULL,
	[WRKNAME2] [nvarchar](255) NULL,
	[WRKADDRESS1] [nvarchar](255) NULL,
	[WRKADDRESS2] [nvarchar](255) NULL,
	[WRKADDRESS3] [nvarchar](255) NULL,
	[WRKZIP] [nvarchar](50) NULL,
	[WRKREGION] [nvarchar](255) NULL,
	[WRKCOUNTRY] [nvarchar](255) NULL,
	[WRKATTENTION] [nvarchar](255) NULL,
	[LANGUAGE_CODE] [int] NULL,
	[BREVDATO] [nvarchar](255) NULL,
	[FORFATTER] [nvarchar](50) NULL,
	[UNDERSKRIVER] [nvarchar](50) NULL,
	[LXNGDE] [nvarchar](255) NULL,
	[ADVOKATKONTAKT] [nvarchar](255) NULL,
	[RYGNFEJL] [nvarchar](255) NULL,
	[GFKNRNYT] [nvarchar](255) NULL,
	[MALEDATO] [datetime] NULL,
	[LEVERANDXR] [bigint] NULL,
	[LEVNAVN] [nvarchar](255) NULL,
	[ACCEPTKODE] [int] NULL,
	[FEJLTYPE2] [nvarchar](255) NULL,
	[produkttype2] [nvarchar](255) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_DK_IMPORT3]    Script Date: 21-05-2019 12:00:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_DK_IMPORT3](
	[DATASET] [nvarchar](20) NULL,
	[ROWNUMBER] [bigint] NULL,
	[LASTCHANGED] [datetime] NULL,
	[REKLAMATIONSNR] [varchar](50) NULL,
	[NAVN] [nvarchar](255) NULL,
	[SXGENAVN] [nvarchar](255) NULL,
	[ADRESSE1] [nvarchar](255) NULL,
	[ADRESSE2] [nvarchar](255) NULL,
	[POSTNR] [nvarchar](50) NULL,
	[ADRESSE3] [nvarchar](255) NULL,
	[TLFNR1] [nvarchar](255) NULL,
	[EJENDOMSTYPE] [nvarchar](255) NULL,
	[LAND] [nvarchar](255) NULL,
	[REKLGRUPPE] [nvarchar](255) NULL,
	[OPRETTET] [datetime] NULL,
	[BESIGTIGET] [datetime] NULL,
	[AFSLUTNINGSDATO] [datetime] NULL,
	[KONKLUSION] [nvarchar](20) NULL,
	[HXNDVXRKER] [int] NULL,
	[FORHANDLER] [int] NULL,
	[PRODUKTTYPE] [nvarchar](20) NULL,
	[FARVE] [nvarchar](20) NULL,
	[RYGNINGSTYPE] [nvarchar](50) NULL,
	[TAGHXLDNING] [int] NULL,
	[PRODUKTIONSNR] [nvarchar](255) NULL,
	[REKLPLADER] [int] NULL,
	[ANTALRYGNINGER] [int] NULL,
	[TOTALPLADER] [int] NULL,
	[FEJLTYPE] [nvarchar](255) NULL,
	[ADVOKAT] [nvarchar](255) NULL,
	[RETSLIGSYNSKXN] [datetime] NULL,
	[AFSLUTTET] [int] NULL,
	[LXNGDEDELETED] [int] NULL,
	[HENSXTTELSESDATO] [datetime] NULL,
	[OPLAGTDATO] [datetime] NULL,
	[USERIDSLETTET] [int] NULL,
	[BREV] [int] NULL,
	[SKADESGRADKANT] [int] NULL,
	[SKADESGRADTOP] [int] NULL,
	[CHECKBELXB] [float] NULL,
	[JOURNALNR] [nvarchar](255) NULL,
	[GLBBTNR] [nvarchar](255) NULL,
	[KONTROLKODE] [int] NULL,
	[ANLXG] [int] NULL,
	[PRODXR] [int] NULL,
	[NYTBBTNR] [nvarchar](255) NULL,
	[RYGNPRODNR] [nvarchar](255) NULL,
	[TLFNR2] [nvarchar](255) NULL,
	[GENOPRETDATO] [datetime] NULL,
	[KONTAKTATFORHANDLER] [nvarchar](255) NULL,
	[RETSAGSNR] [nvarchar](255) NULL,
	[KORRNAVN] [nvarchar](255) NULL,
	[KORRADRESSE1] [nvarchar](255) NULL,
	[KORRADRESSE2] [nvarchar](255) NULL,
	[KORRPOSTNR] [nvarchar](255) NULL,
	[KORRADRESSE3] [nvarchar](255) NULL,
	[ADVOKATMEDSAGSXGT] [nvarchar](255) NULL,
	[GFKNR] [nvarchar](255) NULL,
	[KULANCEFORHANDLER] [nvarchar](255) NULL,
	[MODTAGETFRA] [int] NULL,
	[MEDSAGSXGTJOURNR] [nvarchar](255) NULL,
	[SAGSBEHANDLER] [nvarchar](10) NULL,
	[INVOICEACCOUNTDEL] [nvarchar](255) NULL,
	[BRUGERID] [nvarchar](50) NULL,
	[WRKNAME] [nvarchar](255) NULL,
	[WRKNAME2] [nvarchar](255) NULL,
	[WRKADDRESS1] [nvarchar](255) NULL,
	[WRKADDRESS2] [nvarchar](255) NULL,
	[WRKADDRESS3] [nvarchar](255) NULL,
	[WRKZIP] [nvarchar](50) NULL,
	[WRKREGION] [nvarchar](255) NULL,
	[WRKCOUNTRY] [nvarchar](255) NULL,
	[WRKATTENTION] [nvarchar](255) NULL,
	[LANGUAGE_CODE] [int] NULL,
	[BREVDATO] [nvarchar](255) NULL,
	[FORFATTER] [nvarchar](50) NULL,
	[UNDERSKRIVER] [nvarchar](50) NULL,
	[LXNGDE] [nvarchar](255) NULL,
	[ADVOKATKONTAKT] [nvarchar](255) NULL,
	[RYGNFEJL] [nvarchar](255) NULL,
	[GFKNRNYT] [nvarchar](255) NULL,
	[MALEDATO] [datetime] NULL,
	[LEVERANDXR] [bigint] NULL,
	[LEVNAVN] [nvarchar](255) NULL,
	[ACCEPTKODE] [int] NULL,
	[FEJLTYPE2] [nvarchar](255) NULL,
	[produkttype2] [nvarchar](255) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_DK_IMPORT4]    Script Date: 21-05-2019 12:00:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_DK_IMPORT4](
	[DATASET] [nvarchar](20) NULL,
	[ROWNUMBER] [bigint] NULL,
	[LASTCHANGED] [datetime] NULL,
	[REKLAMATIONSNR] [varchar](50) NULL,
	[NAVN] [nvarchar](255) NULL,
	[NAVN_DK] [nvarchar](255) NULL,
	[SXGENAVN] [nvarchar](255) NULL,
	[ADRESSE1] [nvarchar](255) NULL,
	[ADRESSE1_DK] [nvarchar](255) NULL,
	[ADRESSE2] [nvarchar](255) NULL,
	[ADRESSE2_DK] [nvarchar](255) NULL,
	[POSTNR] [nvarchar](50) NULL,
	[ADRESSE3] [nvarchar](255) NULL,
	[ADRESSE3_DK] [nvarchar](255) NULL,
	[TLFNR1] [nvarchar](255) NULL,
	[EJENDOMSTYPE] [nvarchar](255) NULL,
	[LAND] [nvarchar](255) NULL,
	[REKLGRUPPE] [nvarchar](255) NULL,
	[OPRETTET] [datetime] NULL,
	[BESIGTIGET] [datetime] NULL,
	[AFSLUTNINGSDATO] [datetime] NULL,
	[KONKLUSION] [nvarchar](20) NULL,
	[HXNDVXRKER] [int] NULL,
	[FORHANDLER] [int] NULL,
	[PRODUKTTYPE] [nvarchar](20) NULL,
	[FARVE] [nvarchar](20) NULL,
	[RYGNINGSTYPE] [nvarchar](50) NULL,
	[TAGHXLDNING] [int] NULL,
	[PRODUKTIONSNR] [nvarchar](255) NULL,
	[REKLPLADER] [int] NULL,
	[ANTALRYGNINGER] [int] NULL,
	[TOTALPLADER] [int] NULL,
	[FEJLTYPE] [nvarchar](255) NULL,
	[ADVOKAT] [nvarchar](255) NULL,
	[RETSLIGSYNSKXN] [datetime] NULL,
	[AFSLUTTET] [int] NULL,
	[LXNGDEDELETED] [int] NULL,
	[HENSXTTELSESDATO] [datetime] NULL,
	[OPLAGTDATO] [datetime] NULL,
	[USERIDSLETTET] [int] NULL,
	[BREV] [int] NULL,
	[SKADESGRADKANT] [int] NULL,
	[SKADESGRADTOP] [int] NULL,
	[CHECKBELXB] [float] NULL,
	[JOURNALNR] [nvarchar](255) NULL,
	[GLBBTNR] [nvarchar](255) NULL,
	[KONTROLKODE] [int] NULL,
	[ANLXG] [int] NULL,
	[PRODXR] [int] NULL,
	[NYTBBTNR] [nvarchar](255) NULL,
	[RYGNPRODNR] [nvarchar](255) NULL,
	[TLFNR2] [nvarchar](255) NULL,
	[GENOPRETDATO] [datetime] NULL,
	[KONTAKTATFORHANDLER] [nvarchar](255) NULL,
	[RETSAGSNR] [nvarchar](255) NULL,
	[KORRNAVN] [nvarchar](255) NULL,
	[KORRADRESSE1] [nvarchar](255) NULL,
	[KORRADRESSE2] [nvarchar](255) NULL,
	[KORRPOSTNR] [nvarchar](255) NULL,
	[KORRADRESSE3] [nvarchar](255) NULL,
	[ADVOKATMEDSAGSXGT] [nvarchar](255) NULL,
	[GFKNR] [nvarchar](255) NULL,
	[KULANCEFORHANDLER] [nvarchar](255) NULL,
	[MODTAGETFRA] [int] NULL,
	[MEDSAGSXGTJOURNR] [nvarchar](255) NULL,
	[SAGSBEHANDLER] [nvarchar](10) NULL,
	[INVOICEACCOUNTDEL] [nvarchar](255) NULL,
	[BRUGERID] [nvarchar](50) NULL,
	[WRKNAME] [nvarchar](255) NULL,
	[WRKNAME2] [nvarchar](255) NULL,
	[WRKADDRESS1] [nvarchar](255) NULL,
	[WRKADDRESS2] [nvarchar](255) NULL,
	[WRKADDRESS3] [nvarchar](255) NULL,
	[WRKZIP] [nvarchar](50) NULL,
	[WRKREGION] [nvarchar](255) NULL,
	[WRKCOUNTRY] [nvarchar](255) NULL,
	[WRKATTENTION] [nvarchar](255) NULL,
	[LANGUAGE_CODE] [int] NULL,
	[BREVDATO] [nvarchar](255) NULL,
	[FORFATTER] [nvarchar](50) NULL,
	[UNDERSKRIVER] [nvarchar](50) NULL,
	[LXNGDE] [nvarchar](255) NULL,
	[ADVOKATKONTAKT] [nvarchar](255) NULL,
	[RYGNFEJL] [nvarchar](255) NULL,
	[GFKNRNYT] [nvarchar](255) NULL,
	[MALEDATO] [datetime] NULL,
	[LEVERANDXR] [bigint] NULL,
	[LEVNAVN] [nvarchar](255) NULL,
	[ACCEPTKODE] [int] NULL,
	[FEJLTYPE2] [nvarchar](255) NULL,
	[produkttype2] [nvarchar](255) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_DK_PR_NAMES]    Script Date: 21-05-2019 12:00:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_DK_PR_NAMES](
	[Itemnumber] [nvarchar](255) NULL,
	[Productname] [nvarchar](255) NULL,
	[OldCIM] [nvarchar](255) NULL,
	[BOMunit] [nvarchar](255) NULL,
	[SDKnumber] [nvarchar](255) NULL,
	[DBnumber] [nvarchar](255) NULL,
	[DanishProductname] [nvarchar](255) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_DK_TMP]    Script Date: 21-05-2019 12:00:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_DK_TMP](
	[rowno] [bigint] NULL,
	[recID] [varchar](50) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_dkc]    Script Date: 21-05-2019 12:00:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_dkc](
	[dkc] [nchar](10) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_dki]    Script Date: 21-05-2019 12:00:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_dki](
	[id] [int] NULL,
	[code] [varchar](50) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_dki2]    Script Date: 21-05-2019 12:00:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_dki2](
	[comId] [int] NULL,
	[comcbo] [int] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_export1]    Script Date: 21-05-2019 12:00:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_export1](
	[cr] [nvarchar](4000) NULL,
	[ocr] [nvarchar](4000) NULL,
	[vyr] [nvarchar](4000) NULL,
	[ks] [nvarchar](4000) NULL,
	[poz] [nvarchar](4000) NULL,
	[ssp] [nvarchar](4000) NULL,
	[od] [nvarchar](4000) NULL,
	[zvm] [nvarchar](4000) NULL,
	[op] [nvarchar](4000) NULL,
	[fj] [nvarchar](4000) NULL,
	[ssk] [nvarchar](4000) NULL,
	[ts] [nvarchar](4000) NULL,
	[os] [nvarchar](4000) NULL,
	[nv] [nvarchar](4000) NULL,
	[zp] [nvarchar](4000) NULL,
	[zs] [nvarchar](4000) NULL,
	[um] [nvarchar](4000) NULL,
	[hr] [nvarchar](4000) NULL,
	[sz] [nvarchar](4000) NULL,
	[pú] [nvarchar](4000) NULL,
	[dp] [nvarchar](4000) NULL,
	[po] [nvarchar](4000) NULL,
	[no] [nvarchar](4000) NULL,
	[so] [nvarchar](4000) NULL,
	[vo] [nvarchar](4000) NULL,
	[ko] [nvarchar](4000) NULL,
	[vy] [nvarchar](4000) NULL,
	[pp] [nvarchar](4000) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_fo_2017_02_21]    Script Date: 21-05-2019 12:00:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_fo_2017_02_21](
	[comId] [int] IDENTITY(100000,1) NOT NULL,
	[comCode] [varchar](8) NULL,
	[comAX] [varchar](14) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_fr_tmp]    Script Date: 21-05-2019 12:00:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_fr_tmp](
	[com_id] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_holandsko]    Script Date: 21-05-2019 12:00:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_holandsko](
	[x_Settled] [nvarchar](255) NULL,
	[date_enter] [smalldatetime] NULL,
	[number] [nvarchar](255) NULL,
	[country] [nvarchar](255) NULL,
	[BFM] [nvarchar](255) NULL,
	[x_Claim_number] [nvarchar](255) NULL,
	[f2_local_ident] [nvarchar](255) NULL,
	[x_Core_number] [nvarchar](255) NULL,
	[notice] [nvarchar](255) NULL,
	[distrib_fk] [nvarchar](255) NULL,
	[customerName] [nvarchar](255) NULL,
	[customer_fk] [char](10) NULL,
	[constructionName] [nvarchar](255) NULL,
	[construction_fk] [char](10) NULL,
	[xF13] [money] NULL,
	[nt] [nvarchar](255) NULL,
	[cbocmo] [nvarchar](255) NULL,
	[product_fk] [nvarchar](255) NULL,
	[copCount] [int] NULL,
	[copID] [int] NULL,
	[defect_fk1] [nvarchar](255) NULL,
	[defect_count1] [float] NULL,
	[defect_fk2] [nvarchar](255) NULL,
	[defect_count2] [float] NULL,
	[xFreq] [float] NULL,
	[xResult] [float] NULL,
	[xRepclaims] [nvarchar](255) NULL,
	[closeTime] [nvarchar](255) NULL,
	[uzavreno] [smalldatetime] NULL,
	[comID] [int] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_identifikace2]    Script Date: 21-05-2019 12:00:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_identifikace2](
	[comCode] [nvarchar](255) NULL,
	[ident] [nvarchar](255) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_import_barva]    Script Date: 21-05-2019 12:00:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_import_barva](
	[pods] [varchar](500) NULL,
	[id] [int] IDENTITY(2712,1) NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_import_barvy]    Script Date: 21-05-2019 12:00:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_import_barvy](
	[pro_color_fk] [nvarchar](255) NULL,
	[id] [int] IDENTITY(2708,1) NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_IMPORt_ID]    Script Date: 21-05-2019 12:00:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_IMPORt_ID](
	[id] [int] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_IMPORT_KURZ]    Script Date: 21-05-2019 12:00:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_IMPORT_KURZ](
	[MENA] [varchar](3) NOT NULL,
	[ROK] [int] NOT NULL,
	[MESIC] [int] NOT NULL,
	[KURZ] [float] NOT NULL,
	[KURZ_EUR] [float] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_import_naklady]    Script Date: 21-05-2019 12:00:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_import_naklady](
	[DATASET] [nvarchar](255) NULL,
	[REKLAMATIONSNR] [nvarchar](255) NULL,
	[NAVN] [nvarchar](255) NULL,
	[ADRESSE1] [nvarchar](255) NULL,
	[POSTNR] [nvarchar](255) NULL,
	[ADRESSE3] [nvarchar](255) NULL,
	[ACCOUNTNUMBER] [nvarchar](255) NULL,
	[DATE_] [datetime] NULL,
	[VOUCHER] [float] NULL,
	[TXT] [nvarchar](255) NULL,
	[AMOUNTMST] [float] NULL,
	[EXCHANGECODE] [nvarchar](255) NULL,
	[AMOUNTEXCH] [float] NULL,
	[EG_REKLAMATIONNUMMER] [nvarchar](255) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_import_note]    Script Date: 21-05-2019 12:00:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_import_note](
	[DATASET] [nvarchar](255) NULL,
	[ROWNUMBER] [float] NULL,
	[FILE_] [nvarchar](255) NULL,
	[DOCCOMMENT] [nvarchar](255) NULL,
	[OWNERFILEID] [float] NULL,
	[REKLAMATIONSNR] [nvarchar](255) NULL,
	[OWNERRECID] [float] NULL,
	[TYPE] [nvarchar](255) NULL,
	[CREATEDATE] [datetime] NULL,
	[CHILDFILEID] [float] NULL,
	[CHILDRECID] [float] NULL,
	[CREATEDATE2] [datetime] NULL,
	[DOCCOMMENT3] [nvarchar](255) NULL,
	[DMSDOCID] [float] NULL,
	[EG_VOUCHER] [nvarchar](255) NULL,
	[EG_CREATETIME] [float] NULL,
	[LINENUMBER] [float] NULL,
	[TXT] [nvarchar](255) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_import_podskupina]    Script Date: 21-05-2019 12:00:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_import_podskupina](
	[pods] [varchar](500) NULL,
	[id] [int] IDENTITY(2708,1) NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_import_price_big]    Script Date: 21-05-2019 12:00:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_import_price_big](
	[Itemnumber] [nvarchar](255) NULL,
	[DKK] [float] NULL,
	[NOK] [float] NULL,
	[SEK] [float] NULL,
	[EUR] [float] NULL,
	[PLN] [float] NULL,
	[CZK] [float] NULL,
	[GBP] [float] NULL,
	[RUB] [float] NULL,
	[USD] [float] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_import_price_ppl]    Script Date: 21-05-2019 12:00:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_import_price_ppl](
	[Itemnumber] [nvarchar](255) NULL,
	[region] [nvarchar](255) NULL,
	[curr] [nvarchar](255) NULL,
	[price] [float] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_IMPORT_PRICELIST]    Script Date: 21-05-2019 12:00:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_IMPORT_PRICELIST](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[From date] [datetime] NULL,
	[Relation] [nvarchar](255) NULL,
	[FROM] [nvarchar](255) NULL,
	[TO] [nvarchar](255) NULL,
	[PIM] [nvarchar](255) NULL,
	[Product name] [nvarchar](255) NULL,
	[Item group] [nvarchar](255) NULL,
	[Unit] [nvarchar](255) NULL,
	[Amount in currency] [decimal](18, 3) NULL,
	[Currency] [nvarchar](255) NULL,
	[prgrp1] [nvarchar](200) NULL,
	[Production unit] [nvarchar](200) NULL,
	[cbo_fk] [int] NULL,
	[group1fk] [int] NULL,
	[main] [bit] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_IMPORT_PRODUCT]    Script Date: 21-05-2019 12:00:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_IMPORT_PRODUCT](
	[proCode] [varchar](50) NULL,
	[proCodeOld] [varchar](50) NULL,
	[proName] [varchar](500) NULL,
	[ProWeight] [decimal](18, 5) NULL,
	[proId] [int] NULL,
	[proColorFk] [int] NULL,
	[ProWeight2] [decimal](18, 5) NULL,
	[proConsum] [decimal](18, 5) NULL,
	[proSkupina1] [int] NULL,
	[proPodskupina] [varchar](500) NULL,
	[proCodeExt] [varchar](50) NULL,
	[ProNameEn] [varchar](500) NULL,
	[ProNameEn2] [varchar](500) NULL,
	[ProGroup1fk] [int] NULL,
	[proPodskupinaFk] [int] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_IMPORT_PRODUCT2]    Script Date: 21-05-2019 12:00:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_IMPORT_PRODUCT2](
	[PRO_CRDATE] [nvarchar](255) NULL,
	[PRO_MODDATE] [nvarchar](255) NULL,
	[PRO_CRUSER] [nvarchar](255) NULL,
	[PRO_MODUSER] [nvarchar](255) NULL,
	[PRO_ID] [nvarchar](255) NULL,
	[PRO_NAME] [nvarchar](255) NULL,
	[PRO_NAME_DK] [nvarchar](255) NULL,
	[PRO_SIZE] [nvarchar](255) NULL,
	[PRO_CODE] [nvarchar](255) NULL,
	[PRO_CODE_OLD] [nvarchar](255) NULL,
	[PRO_COLOR_FK] [nvarchar](255) NULL,
	[PRO_WEIGHT] [float] NULL,
	[PRO_WEIGHT_PC] [float] NULL,
	[PRO_WEIGHT_UNIT] [float] NULL,
	[PRO_PACKING] [nvarchar](255) NULL,
	[PRO_CONSUM] [float] NULL,
	[PRO_PRICE] [nvarchar](255) NULL,
	[PRO_GROUP1] [nvarchar](200) NULL,
	[PRO_GROUP2] [int] NULL,
	[PRO_GROUP3] [int] NULL,
	[PRO_CODE_DK] [nvarchar](255) NULL,
	[PRO_CODE_SCALA] [nvarchar](255) NULL,
	[PRO_TYPE_KRYTINA] [nvarchar](255) NULL,
	[PRO_CODE_INTERN] [nvarchar](255) NULL,
	[PRO_GROUP1_S] [nvarchar](255) NULL,
	[PRO_SUCCESSOR_FK] [nvarchar](255) NULL,
	[PRO_CODE_EXT] [nvarchar](255) NULL,
	[PRO_AX_NAME] [nvarchar](255) NULL,
	[PRO_SCALA_NAME] [nvarchar](255) NULL,
	[PRO_AX_CODE] [nvarchar](255) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_IMPORT_PRODUCT3]    Script Date: 21-05-2019 12:00:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_IMPORT_PRODUCT3](
	[PRO_CRDATE] [nvarchar](255) NULL,
	[PRO_MODDATE] [nvarchar](255) NULL,
	[PRO_CRUSER] [nvarchar](255) NULL,
	[PRO_MODUSER] [nvarchar](255) NULL,
	[PRO_ID] [nvarchar](255) NULL,
	[PRO_NAME] [nvarchar](255) NULL,
	[PRO_NAME_DK] [nvarchar](255) NULL,
	[PRO_SIZE] [nvarchar](255) NULL,
	[PRO_CODE] [nvarchar](255) NULL,
	[PRO_CODE_OLD] [nvarchar](255) NULL,
	[PRO_COLOR_FK] [nvarchar](255) NULL,
	[PRO_WEIGHT] [float] NULL,
	[PRO_WEIGHT_PC] [float] NULL,
	[PRO_WEIGHT_UNIT] [float] NULL,
	[PRO_PACKING] [nvarchar](255) NULL,
	[PRO_CONSUM] [float] NULL,
	[PRO_PRICE] [nvarchar](255) NULL,
	[PRO_GROUP1] [nvarchar](200) NULL,
	[PRO_GROUP2] [int] NULL,
	[PRO_GROUP3] [int] NULL,
	[PRO_CODE_DK] [nvarchar](255) NULL,
	[PRO_CODE_SCALA] [nvarchar](255) NULL,
	[PRO_TYPE_KRYTINA] [nvarchar](255) NULL,
	[PRO_CODE_INTERN] [nvarchar](255) NULL,
	[PRO_GROUP1_S] [nvarchar](255) NULL,
	[PRO_SUCCESSOR_FK] [nvarchar](255) NULL,
	[PRO_CODE_EXT] [nvarchar](255) NULL,
	[PRO_AX_NAME] [nvarchar](255) NULL,
	[PRO_SCALA_NAME] [nvarchar](255) NULL,
	[PRO_AX_CODE] [nvarchar](255) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_import_produkty]    Script Date: 21-05-2019 12:00:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_import_produkty](
	[PRO_CRDATE] [nvarchar](255) NULL,
	[PRO_MODDATE] [nvarchar](255) NULL,
	[PRO_CRUSER] [nvarchar](255) NULL,
	[PRO_MODUSER] [nvarchar](255) NULL,
	[PRO_ID] [nvarchar](255) NULL,
	[PRO_NAME] [nvarchar](255) NULL,
	[PRO_NAME_DK] [nvarchar](255) NULL,
	[PRO_SIZE] [nvarchar](255) NULL,
	[PRO_CODE] [nvarchar](255) NULL,
	[PRO_CODE_OLD] [nvarchar](255) NULL,
	[PRO_COLOR_FK] [nvarchar](255) NULL,
	[PRO_WEIGHT] [float] NULL,
	[PRO_WEIGHT_PC] [float] NULL,
	[PRO_WEIGHT_UNIT] [float] NULL,
	[PRO_PACKING] [nvarchar](255) NULL,
	[PRO_CONSUM] [float] NULL,
	[PRO_PRICE] [nvarchar](255) NULL,
	[PRO_GROUP1] [float] NULL,
	[PRO_GROUP2] [float] NULL,
	[PRO_GROUP3] [float] NULL,
	[PRO_CODE_DK] [nvarchar](255) NULL,
	[PRO_CODE_SCALA] [nvarchar](255) NULL,
	[PRO_TYPE_KRYTINA] [nvarchar](255) NULL,
	[PRO_CODE_INTERN] [nvarchar](255) NULL,
	[PRO_GROUP1_S] [nvarchar](255) NULL,
	[PRO_SUCCESSOR_FK] [nvarchar](255) NULL,
	[PRO_CODE_EXT] [nvarchar](255) NULL,
	[PRO_AX_NAME] [nvarchar](255) NULL,
	[PRO_SCALA_NAME] [nvarchar](255) NULL,
	[PRO_AX_CODE] [nvarchar](255) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_import_vyrz]    Script Date: 21-05-2019 12:00:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_import_vyrz](
	[ITM_CODE] [float] NULL,
	[ITM_NAME] [nvarchar](255) NULL,
	[ITM_NAME1] [nvarchar](255) NULL,
	[po4et produktů] [float] NULL,
	[Production unit] [nvarchar](255) NULL,
	[cbo] [int] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_item]    Script Date: 21-05-2019 12:00:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_item](
	[itm_id] [float] NULL,
	[itm_type_fk] [float] NULL,
	[itm_code] [nvarchar](255) NULL,
	[itm_nameCZ] [nvarchar](255) NULL,
	[itm_nameEN] [nvarchar](255) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_klima_new_cz]    Script Date: 21-05-2019 12:00:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_klima_new_cz](
	[Obec] [nvarchar](255) NULL,
	[pscOd] [float] NULL,
	[klima] [nvarchar](255) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_klima_new_sk]    Script Date: 21-05-2019 12:00:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_klima_new_sk](
	[obec] [nvarchar](255) NULL,
	[pscod] [nvarchar](255) NULL,
	[klima] [nvarchar](255) NULL,
	[F4] [nvarchar](255) NULL,
	[F5] [nvarchar](255) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_klima_sk]    Script Date: 21-05-2019 12:00:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_klima_sk](
	[Obec] [nvarchar](255) NULL,
	[pscOd] [float] NULL,
	[pscDo] [float] NULL,
	[oblast] [nvarchar](255) NULL,
	[stat] [float] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_klimaticke_oblasti_bck]    Script Date: 21-05-2019 12:00:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_klimaticke_oblasti_bck](
	[KLI_ID] [int] IDENTITY(1,1) NOT NULL,
	[krajKod] [float] NULL,
	[krajNazev] [nvarchar](255) NULL,
	[okresKod] [nvarchar](255) NULL,
	[okresNazev] [nvarchar](255) NULL,
	[obecKod] [nvarchar](255) NULL,
	[obecNazev] [nvarchar](255) NULL,
	[KLI_ELEVATION] [float] NULL,
	[poznamka] [nvarchar](255) NULL,
	[KLI_ELEVATION_TERITORY] [nvarchar](255) NULL,
	[KLI_PSC_FROM] [int] NULL,
	[KLI_PSC_TO] [int] NULL,
	[KLI_SNOW] [float] NULL,
	[KLI_WIND] [float] NULL,
	[KLI_TERITORY] [nvarchar](255) NULL,
	[KLI_COUNTRY_FK] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_labels]    Script Date: 21-05-2019 12:00:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_labels](
	[lbl_abbr] [nvarchar](255) NULL,
	[lbl_cztext] [nvarchar](4000) NULL,
	[lbl_entext] [nvarchar](4000) NULL,
	[F4] [nvarchar](4000) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_lbl_tmp]    Script Date: 21-05-2019 12:00:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_lbl_tmp](
	[lblId] [int] NULL,
	[lblAbbr] [varchar](50) NULL,
	[lblText] [varchar](500) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_naklady]    Script Date: 21-05-2019 12:00:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_naklady](
	[cop] [varchar](50) NULL,
	[datzauc] [varchar](50) NULL,
	[ucet] [varchar](50) NULL,
	[odpove] [varchar](50) NULL,
	[zaka] [varchar](50) NULL,
	[proj] [varchar](50) NULL,
	[reklamac] [varchar](50) NULL,
	[spole] [varchar](50) NULL,
	[hp] [varchar](50) NULL,
	[castka] [varchar](50) NULL,
	[text] [varchar](50) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_oldcode]    Script Date: 21-05-2019 12:00:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_oldcode](
	[newcode] [varchar](50) NULL,
	[oldcode] [varchar](50) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_pl_market]    Script Date: 21-05-2019 12:00:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_pl_market](
	[market] [nvarchar](max) NULL,
	[fk] [int] NOT NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_plank]    Script Date: 21-05-2019 12:00:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_plank](
	[PRO_CRDATE] [nvarchar](255) NULL,
	[PRO_MODDATE] [nvarchar](255) NULL,
	[PRO_CRUSER] [nvarchar](255) NULL,
	[PRO_MODUSER] [nvarchar](255) NULL,
	[PRO_ID] [nvarchar](255) NULL,
	[PRO_NAME] [nvarchar](255) NULL,
	[PRO_NAME_EN] [nvarchar](255) NULL,
	[PRO_SIZE] [nvarchar](255) NULL,
	[PRO_CODE] [nvarchar](255) NULL,
	[PRO_CODE_OLD] [nvarchar](255) NULL,
	[PRO_COLOR_FK] [int] NULL,
	[PRO_COLOR_NAME] [nvarchar](255) NULL,
	[PRO_WEIGHT] [float] NULL,
	[PRO_WEIGHT_PC] [float] NULL,
	[PRO_WEIGHT_UNIT] [float] NULL,
	[PRO_PACKING] [nvarchar](255) NULL,
	[PRO_CONSUM] [float] NULL,
	[PRO_PRICE] [nvarchar](255) NULL,
	[PRO_GROUP1] [nvarchar](255) NULL,
	[PRO_GROUP2] [float] NULL,
	[PRO_GROUP3] [float] NULL,
	[PRO_CODE_DK] [nvarchar](255) NULL,
	[PRO_CODE_SCALA] [nvarchar](255) NULL,
	[PRO_TYPE_KRYTINA] [nvarchar](255) NULL,
	[PRO_CODE_INTERN] [nvarchar](255) NULL,
	[PRO_GROUP1_S] [int] NULL,
	[PRO_GROUP1_S_NAME] [nvarchar](255) NULL,
	[PRO_SUCCESSOR_FK] [nvarchar](255) NULL,
	[PRO_CODE_EXT] [nvarchar](255) NULL,
	[PRO_AX_NAME] [nvarchar](255) NULL,
	[PRO_SCALA_NAME] [nvarchar](255) NULL,
	[PRO_AX_CODE] [nvarchar](255) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_plank_color]    Script Date: 21-05-2019 12:00:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_plank_color](
	[kod] [nvarchar](5) NULL,
	[name] [nvarchar](255) NULL,
	[cele] [nvarchar](255) NULL,
	[id] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_plank_subc]    Script Date: 21-05-2019 12:00:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_plank_subc](
	[name] [nvarchar](255) NULL,
	[id] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_ppd]    Script Date: 21-05-2019 12:00:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_ppd](
	[id] [int] NOT NULL,
	[def] [varchar](10) NULL,
	[defid] [int] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_ppx]    Script Date: 21-05-2019 12:00:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_ppx](
	[id] [int] NOT NULL,
	[pr] [decimal](18, 2) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_pro_bar_sed]    Script Date: 21-05-2019 12:00:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_pro_bar_sed](
	[proId] [int] NULL,
	[bar_sed] [varchar](10) NULL,
	[ok] [bit] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_Product]    Script Date: 21-05-2019 12:00:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_Product](
	[Product] [nvarchar](255) NULL,
	[vaha] [float] NULL,
	[colour] [nvarchar](255) NULL,
	[type] [nvarchar](255) NULL,
	[color_id] [int] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_product_2006_04_23]    Script Date: 21-05-2019 12:00:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_product_2006_04_23](
	[PROn_ID] [float] NULL,
	[PROn_NAME] [nvarchar](255) NULL,
	[PROn_SIZE] [nvarchar](255) NULL,
	[PROn_CODE] [nvarchar](255) NULL,
	[PROn_COLOR_FK] [float] NULL,
	[PROn_PACKING] [float] NULL,
	[PROn_CONSUM] [float] NULL,
	[PROn_PRICE] [float] NULL,
	[PROn_GROUP1] [float] NULL,
	[PROn_GROUP2] [float] NULL,
	[PROn_GROUP3] [float] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_product_2006_05_23]    Script Date: 21-05-2019 12:00:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_product_2006_05_23](
	[PROn_ID] [int] NULL,
	[PROn_NAME] [nvarchar](255) NULL,
	[PROn_SIZE] [nvarchar](255) NULL,
	[PROn_CODE] [nvarchar](255) NULL,
	[PROn_COLOR_FK] [int] NULL,
	[PROn_PACKING] [int] NULL,
	[PROn_CONSUM] [decimal](18, 2) NULL,
	[PROn_PRICE] [decimal](18, 2) NULL,
	[PROn_GROUP1] [int] NULL,
	[PROn_GROUP2] [int] NULL,
	[PROn_GROUP3] [int] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_product_hierarchy]    Script Date: 21-05-2019 12:00:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_product_hierarchy](
	[l1] [varchar](100) NOT NULL,
	[l1_fk] [int] NULL,
	[l2] [varchar](100) NOT NULL,
	[l2_fk] [int] NULL,
	[l3] [varchar](100) NOT NULL,
	[l3_fk] [int] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_product_import_2016_01_13]    Script Date: 21-05-2019 12:00:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_product_import_2016_01_13](
	[Level1] [nvarchar](max) NULL,
	[Level1_FK] [int] NULL,
	[Level2] [nvarchar](max) NULL,
	[Level2_FK] [int] NULL,
	[Level3] [nvarchar](max) NULL,
	[Level3_FK] [int] NULL,
	[LongDescr] [nvarchar](max) NULL,
	[CIM] [nvarchar](max) NULL,
	[proid] [int] NULL,
	[NewItemNumber] [float] NULL,
	[ProductName] [nvarchar](max) NULL,
	[SearchName] [nvarchar](max) NULL,
	[Product DescriptionTrans] [nvarchar](max) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_produky_2018]    Script Date: 21-05-2019 12:00:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_produky_2018](
	[ItemID] [nvarchar](255) NOT NULL,
	[Name] [nvarchar](255) NULL,
	[OldCimNumber] [nvarchar](255) NULL,
	[ColorCode] [nvarchar](255) NULL,
	[ColorDescription] [nvarchar](255) NULL,
	[GrossWeight] [float] NULL,
	[Group] [nvarchar](255) NULL,
	[SubGroup] [nvarchar](255) NULL,
	[da] [nvarchar](255) NULL,
	[id] [int] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK__produky_2018] PRIMARY KEY CLUSTERED 
(
	[ItemID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_stat_bug]    Script Date: 21-05-2019 12:00:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_stat_bug](
	[cops_id] [int] NOT NULL,
	[cops_Complaint_fk] [int] NOT NULL,
	[stav] [varchar](11) NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_TB_ADDRESS]    Script Date: 21-05-2019 12:00:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_TB_ADDRESS](
	[ID] [int] NOT NULL,
	[TYP] [varchar](200) NULL,
	[PROBLEM] [varchar](200) NULL,
	[PRIRADIT] [varchar](200) NULL,
	[idx] [int] IDENTITY(1,1) NOT NULL,
	[typ_fk] [int] NULL,
	[NEWid] [int] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_TB_ITEM]    Script Date: 21-05-2019 12:00:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_TB_ITEM](
	[ID] [int] NOT NULL,
	[NAME] [varchar](200) NOT NULL,
	[CODE] [varchar](200) NOT NULL,
	[TYPE_FK] [int] NOT NULL,
	[LANGUAGE_FK] [int] NOT NULL,
	[ITM_CODE_DK] [varchar](5) NULL,
	[ITM_CODE_SCALA] [int] NULL,
 CONSTRAINT [PK_TB_ITEMx] PRIMARY KEY CLUSTERED 
(
	[ID] ASC,
	[LANGUAGE_FK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 90) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_TB_LABEL]    Script Date: 21-05-2019 12:00:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_TB_LABEL](
	[CRDATE] [datetime] NOT NULL,
	[MODDATE] [datetime] NOT NULL,
	[CRUSER] [int] NOT NULL,
	[MODUSER] [int] NOT NULL,
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[ABBR] [varchar](100) NOT NULL,
	[LANGUAGE_FK] [int] NOT NULL,
	[TEXT] [varchar](8000) NOT NULL,
 CONSTRAINT [PK_TB_LABELx] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 90) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_TB_PRODUCT]    Script Date: 21-05-2019 12:00:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_TB_PRODUCT](
	[ID] [int] NOT NULL,
	[NAME] [varchar](200) NOT NULL,
	[SIZE] [varchar](200) NULL,
	[CODE] [varchar](200) NOT NULL,
	[COLOR_FK] [int] NOT NULL,
	[WEIGHT] [decimal](18, 3) NULL,
	[WEIGHT_PC] [int] NULL,
	[PACKING] [varchar](200) NULL,
	[CONSUM] [decimal](18, 2) NOT NULL,
	[PRICE] [decimal](18, 2) NULL,
	[GROUP1] [int] NULL,
	[GROUP2] [int] NULL,
	[GROUP3] [int] NULL,
	[PRO_CODE_SCALA] [varchar](50) NULL,
	[PRO_CODE_DK] [varchar](50) NULL,
	[PRO_TYPE_KRYTINA] [char](1) NULL,
	[PRO_CODE_INTERN] [varchar](50) NULL,
 CONSTRAINT [PK_TB_PRODUCTx] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 90) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_TB_PRODUCT_HU]    Script Date: 21-05-2019 12:00:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_TB_PRODUCT_HU](
	[NAME] [varchar](200) NOT NULL,
	[NAME_EN] [varchar](200) NULL,
	[CODE] [varchar](200) NOT NULL,
	[COLOR_FK_TXT] [varchar](20) NULL,
	[COLOR_FK] [int] NULL,
	[WEIGHT] [decimal](18, 3) NULL,
	[WEIGHT_PC] [int] NULL,
	[CONSUM] [decimal](18, 2) NOT NULL,
	[GROUP1] [int] NULL,
	[GROUP2] [int] NULL,
	[GROUP3] [int] NULL,
	[GROUP1_S_TXT] [varchar](200) NULL,
	[GROUP1_S] [int] NULL,
	[AX_NAME] [varchar](200) NULL,
	[AX_CODE] [varchar](20) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_tmp_cosid]    Script Date: 21-05-2019 12:00:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_tmp_cosid](
	[cos_id] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_tmp_dupcode]    Script Date: 21-05-2019 12:00:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_tmp_dupcode](
	[comCode] [varchar](206) NULL,
	[cnt] [int] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_tmp_dupcode2]    Script Date: 21-05-2019 12:00:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_tmp_dupcode2](
	[comCode] [varchar](206) NULL,
	[cnt] [int] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_tmp_dupProductAll]    Script Date: 21-05-2019 12:00:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_tmp_dupProductAll](
	[proCode] [varchar](200) NULL,
	[cnt] [int] NULL,
	[minId] [int] NULL,
	[maxid] [int] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_tmp_prname]    Script Date: 21-05-2019 12:00:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_tmp_prname](
	[kod] [varchar](50) NULL,
	[nazev] [varchar](500) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_tmp_product_old]    Script Date: 21-05-2019 12:00:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_tmp_product_old](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[pro_id] [int] NOT NULL,
	[pro_code] [varchar](200) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_tmp_product_weights]    Script Date: 21-05-2019 12:00:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_tmp_product_weights](
	[kod] [varchar](200) NULL,
	[hmotnost] [varchar](20) NULL,
	[spotreba] [varchar](20) NULL,
	[hm] [decimal](18, 3) NULL,
	[sp] [decimal](18, 2) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_tmp_sumperk1]    Script Date: 21-05-2019 12:00:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_tmp_sumperk1](
	[COM_ID] [int] NOT NULL,
	[COM_F1_CBO_CMO] [int] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_tmp_sumperk2]    Script Date: 21-05-2019 12:00:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_tmp_sumperk2](
	[COM_ID] [int] NOT NULL,
	[COM_F1_CBO_CMO] [int] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_tmp_sumperk3]    Script Date: 21-05-2019 12:00:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_tmp_sumperk3](
	[COM_ID] [int] NOT NULL,
	[COM_F1_CBO_CMO] [int] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_weight]    Script Date: 21-05-2019 12:00:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_weight](
	[code] [varchar](50) NOT NULL,
	[weight] [decimal](18, 4) NOT NULL,
 CONSTRAINT [PK__weight] PRIMARY KEY CLUSTERED 
(
	[code] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[_zal_dk_dostal]    Script Date: 21-05-2019 12:00:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_zal_dk_dostal](
	[COS_ID] [int] NOT NULL,
	[cos_complaint_fk] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_ADDRESS_NEW]    Script Date: 21-05-2019 12:00:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_ADDRESS_NEW](
	[ADR_CRDATE] [datetime] NOT NULL,
	[ADR_MODDATE] [datetime] NOT NULL,
	[ADR_CRUSER] [int] NOT NULL,
	[ADR_MODUSER] [int] NOT NULL,
	[ADR_ID] [int] IDENTITY(100000,1) NOT NULL,
	[ADR_OLDID] [int] NULL,
	[ADR_NAME] [varchar](200) NULL,
	[ADR_STREET] [varchar](200) NULL,
	[ADR_CITY] [varchar](200) NULL,
	[ADR_ZIP] [varchar](50) NULL,
	[ADR_COUNTRY_FK] [int] NOT NULL,
	[ADR_ICO] [varchar](50) NULL,
	[ADR_DIC] [varchar](50) NULL,
	[ADR_PERSON] [varchar](200) NULL,
	[ADR_EMAIL] [varchar](200) NULL,
	[ADR_PHONE] [varchar](200) NULL,
	[ADR_FAX] [varchar](200) NULL,
	[ADR_REGION_FK] [int] NOT NULL,
	[ADR_KLIMA_FK] [int] NULL,
	[ADR_ZARUKA_ID] [int] NULL,
	[ADR_ZARUKA_INFO] [varchar](8000) NULL,
	[ADR_DELETED] [bit] NOT NULL,
	[ADR_ZARUKA_CREATED] [datetime] NULL,
	[ADR_ENDUSER] [bit] NOT NULL,
	[ADR_DISTRIB] [bit] NOT NULL,
	[ADR_ROOF] [bit] NOT NULL,
	[ADR_OTHER] [bit] NOT NULL,
	[ADR_IMPORTTYPE] [int] NULL,
	[ADR_AUTHORIZED] [bit] NOT NULL,
	[ADR_EXDK] [bigint] NULL,
 CONSTRAINT [PK_TB_ADDRESS_NEW] PRIMARY KEY CLUSTERED 
(
	[ADR_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 90) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_ADDRESS_old]    Script Date: 21-05-2019 12:00:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_ADDRESS_old](
	[ADR_CRDATE] [datetime] NOT NULL,
	[ADR_MODDATE] [datetime] NOT NULL,
	[ADR_CRUSER] [int] NOT NULL,
	[ADR_MODUSER] [int] NOT NULL,
	[ADR_ID] [int] IDENTITY(1,1) NOT NULL,
	[ADR_NAME] [varchar](200) NULL,
	[ADR_STREET] [varchar](200) NULL,
	[ADR_CITY] [varchar](200) NULL,
	[ADR_ZIP] [varchar](50) NULL,
	[ADR_COUNTRY_FK] [int] NOT NULL,
	[ADR_ICO] [varchar](50) NULL,
	[ADR_DIC] [varchar](50) NULL,
	[ADR_PERSON] [varchar](200) NULL,
	[ADR_EMAIL] [varchar](200) NULL,
	[ADR_PHONE] [varchar](200) NULL,
	[ADR_FAX] [varchar](200) NULL,
	[ADR_REGION_FK] [int] NOT NULL,
	[ADR_KLIMA_FK] [int] NULL,
	[ADR_ZARUKA_ID] [int] NULL,
	[ADR_ZARUKA_INFO] [varchar](8000) NULL,
	[ADR_DELETED] [bit] NOT NULL,
	[ADR_ZARUKA_CREATED] [datetime] NULL,
 CONSTRAINT [PK_TB_ADDRESS] PRIMARY KEY CLUSTERED 
(
	[ADR_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 90) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_ADDRESS_TYPE]    Script Date: 21-05-2019 12:00:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_ADDRESS_TYPE](
	[ADT_CRDATE] [datetime] NOT NULL,
	[ADT_MODDATE] [datetime] NOT NULL,
	[ADT_CRUSER] [int] NOT NULL,
	[ADT_MODUSER] [int] NOT NULL,
	[ADT_ID] [int] NOT NULL,
	[ADT_NAME] [varchar](200) NULL,
 CONSTRAINT [PK_TB_ADDRESS_TYPE] PRIMARY KEY CLUSTERED 
(
	[ADT_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_COMPLAINT]    Script Date: 21-05-2019 12:00:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_COMPLAINT](
	[COM_CRDATE] [datetime] NOT NULL,
	[COM_MODDATE] [datetime] NOT NULL,
	[COM_CRUSER] [int] NOT NULL,
	[COM_MODUSER] [int] NOT NULL,
	[COM_ID] [int] IDENTITY(100000,1) NOT NULL,
	[COM_NUMBER] [int] NOT NULL,
	[COM_BFM] [char](1) NOT NULL,
	[COM_COUNTRY_FK] [int] NOT NULL,
	[COM_DATE_ENTER] [datetime] NOT NULL,
	[COM_DISTRIB_FK] [int] NULL,
	[COM_CUSTOMER_FK] [int] NULL,
	[COM_CONSTRUCTION_FK] [int] NULL,
	[COM_DATE_DELIVERED] [varchar](50) NULL,
	[COM_TECH_FK] [int] NOT NULL,
	[COM_MAN_FK] [int] NULL,
	[COM_INVOICE] [varchar](50) NULL,
	[COM_REPEAT] [varchar](20) NULL,
	[COM_EXTEND] [int] NULL,
	[COM_TYPE_FK] [int] NOT NULL,
	[COM_NOTICE] [varchar](8000) NULL,
	[COM_F2_LOCAL_PERS] [varchar](50) NULL,
	[COM_F2_LOCAL_DATE] [datetime] NULL,
	[COM_F2_STOCK] [bit] NULL,
	[COM_F2_STOCK_BAD] [varchar](8000) NULL,
	[COM_F2_LOCAL_NOTICE] [varchar](8000) NULL,
	[COM_F2_OBJECT_TYPE] [int] NULL,
	[COM_F2_REALIZ_FK] [int] NULL,
	[COM_F2_REALIZ_AUTOR] [bit] NOT NULL,
	[COM_F2_REALIZ_DATE] [varchar](50) NULL,
	[COM_F2_CALAMITY] [bit] NOT NULL,
	[COM_F2_CALAMITY_DATE] [datetime] NULL,
	[COM_F3_CALAMITY_TYPE] [varchar](200) NULL,
	[COM_F2_ROOF] [varchar](200) NULL,
	[COM_F2_ROOFN_FK] [int] NULL,
	[COM_F2_VENTIALTION_FK] [int] NULL,
	[COM_F2_VENTILATION_OTHER] [varchar](200) NULL,
	[COM_F2_DEFECTS] [varchar](200) NULL,
	[COM_F2_VENTILATION_ITEM] [varchar](200) NULL,
	[COM_F2_VENTILATION_YES] [bit] NOT NULL,
	[COM_F2_FOLIE] [bit] NOT NULL,
	[COM_F2_FOLIE_FK] [int] NULL,
	[COM_F3_FOLIE_TYPE] [varchar](200) NULL,
	[COM_F2_SLOPE] [int] NULL,
	[COM_F2_SLOPE_AREA] [int] NULL,
	[COM_F2_ROOFT_FK] [int] NULL,
	[COM_F2_ROOFT_OTHER] [varchar](200) NULL,
	[COM_F2_ORIENT] [varchar](200) NULL,
	[COM_F2_HEIGHT] [int] NULL,
	[COM_F2_TAKE_FK] [int] NULL,
	[COM_F2_INSERT_FK] [int] NULL,
	[COM_F2_MATERIAL_FK] [int] NULL,
	[COM_F2_MATERIAL_OTHER] [varchar](200) NULL,
	[COM_F2_AVERAGE] [varchar](200) NULL,
	[COM_F2_DISTANCE_FK] [int] NULL,
	[COM_F2_DISTANCE_EDGE_H_FK] [int] NULL,
	[COM_F2_DISTANCE_EDGE_V_FK] [int] NULL,
	[COM_F2_DISTANCE_ANCHOR_H_FK] [int] NULL,
	[COM_F2_PAD] [varchar](200) NULL,
	[COM_F2_PAD_FK] [int] NULL,
	[COM_F2_COVER] [varchar](200) NULL,
	[COM_F2_COVER_FK] [int] NULL,
	[COM_F2_SNOW1] [varchar](200) NULL,
	[COM_F2_SNOW2] [varchar](200) NULL,
	[COM_F2_GUTTER_FK] [int] NULL,
	[COM_F2_GUTTER_OTHER] [varchar](200) NULL,
	[COM_F2_OTHER_DESC] [varchar](8000) NULL,
	[COM_F2_CUSTOMER_DATE] [datetime] NULL,
	[COM_F2_CUSTOMER_DESC] [varchar](8000) NULL,
	[COM_F2_SPECIALIST_DATE] [datetime] NULL,
	[COM_F2_SPECIALIST_DESC] [varchar](8000) NULL,
	[COM_F2_SPECIALIST_YES] [bit] NOT NULL,
	[COM_F2_SOLUTION_PERSON] [varchar](200) NULL,
	[COM_F2_SOLUTION_DATE] [datetime] NULL,
	[COM_F2_SOLUTION_DESC] [varchar](8000) NULL,
	[COM_F2_SOLUTION_ADDRESS] [varchar](100) NULL,
	[COM_F2_SOLUTION_ADDRESS2] [varchar](100) NULL,
	[COM_F2_SOLUTION_ADDRESS3] [varchar](100) NULL,
	[COM_F2_SOLUTION_ADDRESS4] [varchar](100) NULL,
	[COM_F2_SOLUTION_ADDRESS5] [varchar](100) NULL,
	[COM_F2_COMB] [varchar](200) NULL,
	[COM_F2_COMB_FK] [int] NULL,
	[COM_F2_LOAD_DATE] [datetime] NULL,
	[COM_F2_POSTPONE_TO] [datetime] NULL,
	[COM_F3_PERSON_DONE] [varchar](200) NULL,
	[COM_F3_DATE_DONE] [datetime] NULL,
	[COM_F3_PERSON_PASS] [varchar](200) NULL,
	[COM_F3_PERSON_PASSa] [varchar](200) NULL,
	[COM_F3_DATE_PASS] [datetime] NULL,
	[COM_F3_DATE_PASSa] [datetime] NULL,
	[COM_F3_DESC] [varchar](8000) NULL,
	[COM_F3_DESCa] [varchar](8000) NULL,
	[COM_F3_SECONDSTEP] [bit] NOT NULL,
	[COM_F3_NUMBER] [varchar](50) NULL,
	[COM_F3_NUMBER_TYPE] [char](1) NULL,
	[COM_F3_NUMBER_TYPE_FK] [int] NULL,
	[COM_F3B_DATE] [datetime] NULL,
	[COM_F3B_PERSON] [varchar](200) NULL,
	[COM_F4_DATE] [datetime] NULL,
	[COM_F4_PERSON] [varchar](50) NULL,
	[COM_F5_CAUSE] [varchar](8000) NULL,
	[COM_F5_PROVIDE] [varchar](8000) NULL,
	[COM_F6_WARE] [varchar](200) NULL,
	[COM_F6_WARE_DATE] [datetime] NULL,
	[COM_F6_GWR] [varchar](200) NULL,
	[COM_F6_GWR_DATE] [datetime] NULL,
	[COM_F6_COMP] [varchar](200) NULL,
	[COM_F6_COMP_DATE] [datetime] NULL,
	[COM_F6_OTHER] [varchar](200) NULL,
	[COM_F6_OTHER_DATE] [datetime] NULL,
	[COM_F6_CLOSE_DATE] [datetime] NULL,
	[COM_F2_LOCAL_IDENT] [varchar](200) NULL,
	[COM_F3B_COMMENT] [varchar](4000) NULL,
	[COM_DELETED] [bit] NOT NULL,
	[COM_LASTIMPORT] [datetime] NULL,
	[COM_F2_PERCENT_OBCH] [int] NOT NULL,
	[COM_F2_PERCENT_PRAV]  AS ((100)-[COM_F2_PERCENT_OBCH]),
	[COM_F2_LATH_FK] [int] NULL,
	[COM_F2_LATH] [int] NULL,
	[COM_F2_EXCEEDING] [int] NULL,
	[COM_F6_NOTE] [varchar](4000) NULL,
	[COM_PERSON_COM] [int] NULL,
	[COM_PERSON_EXPED] [int] NULL,
	[COM_F3_HISTORY] [ntext] NULL,
	[COM_F1_ORIG_ID] [varchar](50) NULL,
	[COM_F1_GROUP1_FK] [int] NULL,
	[COM_F2_PLOCHA_DODANE] [decimal](18, 2) NULL,
	[COM_F2_PLOCHA_REKLAMOVANE] [decimal](18, 2) NULL,
	[COM_F1_ZAKAZ] [bit] NOT NULL,
	[COM_F1_DOC] [bit] NOT NULL,
	[COM_NOTE] [varchar](8000) NULL,
	[COM_URGENT] [bit] NOT NULL,
	[COM_NEW] [bit] NOT NULL,
	[COM_F2_ROOF_FK] [int] NULL,
	[COM_F2_SISTER] [int] NULL,
	[COM_F5_SISTERDATE] [datetime] NULL,
	[COM_F2_SISTERDATE] [datetime] NULL,
	[COM_F3B_BACK] [ntext] NULL,
	[COM_CHANGED] [bit] NOT NULL,
	[COM_CHANGEDESCRIPTION] [text] NULL,
	[COM_F2_EXTERIOR_TYPE] [int] NULL,
	[COM_F2_EXTERIOR_OTHER] [varchar](200) NULL,
	[COM_F2_GRID] [int] NULL,
	[COM_F2_GRID_OTHER] [varchar](200) NULL,
	[COM_F2_SPARA_HORIZONT] [varchar](200) NULL,
	[COM_F2_SPARA_VERTIKAL] [varchar](200) NULL,
	[COM_F2_INTERSPACE] [int] NULL,
	[COM_F2_ISOLATION] [int] NULL,
	[COM_F2_WORK] [int] NULL,
	[COM_F2_WORK_DEFECT] [varchar](200) NULL,
	[COM_F2_MATERIAL_SLIDING] [varchar](200) NULL,
	[COM_F2_MATERIAL_FIXED] [varchar](200) NULL,
	[COM_F2_ORIENT_EXTERIOR] [varchar](200) NULL,
	[COM_F2_ELEVATION_EXTERIOR] [varchar](200) NULL,
	[COM_F1_FR_STOP] [bit] NOT NULL,
	[COM_F1_E] [bit] NOT NULL,
	[COM_F1_INSURANCE] [bit] NOT NULL,
	[COM_F1_CBO_CMO] [int] NULL,
	[COM_EXFI] [varchar](20) NULL,
	[COM_EXPL] [varchar](20) NULL,
	[COM_CODE_OLD] [varchar](8) NULL,
	[COM_AX_CLAIM_NUMBER] [varchar](14) NULL,
	[COM_QM_FK] [int] NULL,
	[COM_F1_FLS] [bit] NOT NULL,
	[COM_EXDK] [int] NULL,
	[com_f2_local_year] [int] NULL,
	[com_f2_local_YearStr] [varchar](20) NULL,
	[COM_F3C_DATE] [datetime] NULL,
	[COM_F3C_PERSON] [int] NULL,
	[COM_FC3_BUSS_FK] [int] NULL,
	[COM_CODE] [varchar](15) NULL,
	[COM_ADDRESS_FK] [int] NULL,
	[COM_F2_DK_PRICE] [int] NULL,
	[COM_F1_COLOR] [varchar](50) NULL,
	[COM_F1_RIDGES] [int] NULL,
 CONSTRAINT [PK_TB_COMPLAINT] PRIMARY KEY CLUSTERED 
(
	[COM_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 90) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_COMPLAINT_CALCULATION]    Script Date: 21-05-2019 12:00:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_COMPLAINT_CALCULATION](
	[CCA_CRDATE] [datetime] NOT NULL,
	[CCA_MODDATE] [datetime] NOT NULL,
	[CCA_CRUSER] [int] NOT NULL,
	[CCA_MODUSER] [int] NOT NULL,
	[CCA_ID] [int] IDENTITY(100000,1) NOT NULL,
	[CCA_COMPLAINT_FK] [int] NOT NULL,
	[CCA_TYPE_FK] [int] NOT NULL,
	[CCA_TEXT] [varchar](200) NULL,
	[CCA_PRICE] [int] NULL,
	[CCA_PRICE_EURO] [int] NULL,
	[CCA_PRICE_LIBRA] [int] NULL,
	[CCA_PRICE_DKK] [int] NULL,
 CONSTRAINT [PK_TB_COMPLAINT_CALCULATION] PRIMARY KEY CLUSTERED 
(
	[CCA_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 90) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_COMPLAINT_CALCULATION_NOTE]    Script Date: 21-05-2019 12:00:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_COMPLAINT_CALCULATION_NOTE](
	[CCN_CRDATE] [datetime] NOT NULL,
	[CCN_MODDATE] [datetime] NOT NULL,
	[CCN_CRUSER] [int] NOT NULL,
	[CCN_MODUSER] [int] NOT NULL,
	[CCN_ID] [int] IDENTITY(100000,1) NOT NULL,
	[CCN_COMPLAINT_FK] [int] NOT NULL,
	[CCN_TYPE_FK] [int] NOT NULL,
	[CCN_TEXT] [varchar](200) NULL,
	[CCN_PRICE] [int] NULL,
	[CCN_PRICE_EURO] [int] NULL,
	[CCN_PRICE_LIBRA] [int] NULL,
 CONSTRAINT [PK_TB_COMPLAINT_CALCULATION_NOTE] PRIMARY KEY CLUSTERED 
(
	[CCN_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 90) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_COMPLAINT_CALCULATION_REAL]    Script Date: 21-05-2019 12:00:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_COMPLAINT_CALCULATION_REAL](
	[CCR_CRDATE] [datetime] NOT NULL,
	[CCR_MODDATE] [datetime] NOT NULL,
	[CCR_CRUSER] [int] NOT NULL,
	[CCR_MODUSER] [int] NOT NULL,
	[CCR_ID] [int] IDENTITY(100000,1) NOT NULL,
	[CCR_COMPLAINT_FK] [int] NOT NULL,
	[CCR_TYPE_FK] [int] NOT NULL,
	[CCR_TEXT] [varchar](200) NULL,
	[CCR_PRICE] [int] NULL,
	[CCR_PRICE_EURO] [int] NULL,
	[CCR_PRICE_LIBRA]  AS ([CCR_PRICE]/(30)),
	[CCR_SCALA] [bit] NOT NULL,
	[CCR_PRODUCTIONENTITY_FK] [int] NULL,
	[CCR_YEAR] [int] NULL,
	[CCR_AXOLD] [bit] NOT NULL,
 CONSTRAINT [PK_TB_COMPLAINT_CALCULATION_REAL] PRIMARY KEY CLUSTERED 
(
	[CCR_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 90) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_COMPLAINT_CALCULATION_TYPE]    Script Date: 21-05-2019 12:00:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_COMPLAINT_CALCULATION_TYPE](
	[CCT_CRDATE] [datetime] NOT NULL,
	[CCT_MODDATE] [datetime] NOT NULL,
	[CCT_CRUSER] [int] NOT NULL,
	[CCT_MODUSER] [int] NOT NULL,
	[CCT_ID] [int] NOT NULL,
	[CCT_NAME_CZ] [varchar](200) NULL,
	[CCT_NAME_EN] [varchar](200) NULL,
	[CCT_ENABLED] [bit] NOT NULL,
	[CCT_AX_ACCOUNT] [varchar](20) NULL,
 CONSTRAINT [PK_TB_COMPLAINT_CALCULATION_TYPE] PRIMARY KEY CLUSTERED 
(
	[CCT_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 90) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_COMPLAINT_CLOSED]    Script Date: 21-05-2019 12:00:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_COMPLAINT_CLOSED](
	[CCL_ID] [int] IDENTITY(100000,1) NOT NULL,
	[CCL_COMPLAINT_FK] [int] NOT NULL,
	[CCL_DATE] [datetime] NOT NULL,
 CONSTRAINT [PK_TB_COMPLAINT_CLOSED] PRIMARY KEY CLUSTERED 
(
	[CCL_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_COMPLAINT_DOCUMENT]    Script Date: 21-05-2019 12:00:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_COMPLAINT_DOCUMENT](
	[COD_CRDATE] [datetime] NOT NULL,
	[COD_MODDATE] [datetime] NOT NULL,
	[COD_CRUSER] [int] NOT NULL,
	[COD_MODUSER] [int] NOT NULL,
	[COD_ID] [int] IDENTITY(10000000,1) NOT NULL,
	[COD_COMPLAINT_FK] [int] NOT NULL,
	[COD_TYPE_FK] [int] NOT NULL,
	[COD_DESCRIPTION] [varchar](500) NULL,
	[COD_FILENAME] [varchar](500) NULL,
	[COD_FI] [bit] NOT NULL,
	[COD_DK] [bit] NOT NULL,
 CONSTRAINT [PK_TB_COMPLAINT_DOCUMENT] PRIMARY KEY CLUSTERED 
(
	[COD_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 90) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_COMPLAINT_DOCUMENT_2015_04_24]    Script Date: 21-05-2019 12:00:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_COMPLAINT_DOCUMENT_2015_04_24](
	[COD_CRDATE] [datetime] NOT NULL,
	[COD_MODDATE] [datetime] NOT NULL,
	[COD_CRUSER] [int] NOT NULL,
	[COD_MODUSER] [int] NOT NULL,
	[COD_ID] [int] IDENTITY(10000000,1) NOT NULL,
	[COD_COMPLAINT_FK] [int] NOT NULL,
	[COD_TYPE_FK] [int] NOT NULL,
	[COD_DESCRIPTION] [varchar](500) NULL,
	[COD_FILENAME] [varchar](500) NULL,
	[COD_FI] [bit] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_COMPLAINT_DOCUMENT_TYPE]    Script Date: 21-05-2019 12:00:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_COMPLAINT_DOCUMENT_TYPE](
	[CDT_CRDATE] [datetime] NOT NULL,
	[CDT_MODDATE] [datetime] NOT NULL,
	[CDT_CRUSER] [int] NOT NULL,
	[CDT_MODUSER] [int] NOT NULL,
	[CDT_ID] [int] NOT NULL,
	[CDT_NAME_CZ] [varchar](100) NULL,
	[CDT_NAME_EN] [varchar](100) NULL,
	[CDT_ISTEMPLATE] [bit] NOT NULL,
 CONSTRAINT [PK_TB_COMPLAINT_DOCUMENT_TYPE] PRIMARY KEY CLUSTERED 
(
	[CDT_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 90) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_COMPLAINT_EXPEDICION_REAL]    Script Date: 21-05-2019 12:00:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_COMPLAINT_EXPEDICION_REAL](
	[CER_CRDATE] [datetime] NOT NULL,
	[CER_MODDATE] [datetime] NOT NULL,
	[CER_CRUSER] [int] NOT NULL,
	[CER_MODUSER] [int] NOT NULL,
	[CER_ID] [int] IDENTITY(10000000,1) NOT NULL,
	[CER_COMPLAINT_FK] [int] NOT NULL,
	[CER_TYPE_FK] [int] NOT NULL,
	[CER_TEXT] [varchar](200) NULL,
	[CER_DATE] [datetime] NULL,
	[CER_CODE] [varchar](50) NULL,
	[CER_NAME1] [varchar](200) NULL,
	[CER_NAME2] [varchar](200) NULL,
	[CER_QUANT] [varchar](50) NULL,
 CONSTRAINT [PK_TB_COMPLAINT_EXPEDICION_REAL] PRIMARY KEY CLUSTERED 
(
	[CER_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 90) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_COMPLAINT_EXPEDICION_TYPE]    Script Date: 21-05-2019 12:00:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_COMPLAINT_EXPEDICION_TYPE](
	[CET_CRDATE] [datetime] NOT NULL,
	[CET_MODDATE] [datetime] NOT NULL,
	[CET_CRUSER] [int] NOT NULL,
	[CET_MODUSER] [int] NOT NULL,
	[CET_ID] [int] NOT NULL,
	[CET_NAME] [varchar](200) NULL,
 CONSTRAINT [PK_TB_COMPLAINT_EXPEDICION_TYPE] PRIMARY KEY CLUSTERED 
(
	[CET_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 90) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_COMPLAINT_INDEMNIFICATION]    Script Date: 21-05-2019 12:00:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_COMPLAINT_INDEMNIFICATION](
	[COP_CRDATE] [datetime] NOT NULL,
	[COP_MODDATE] [datetime] NOT NULL,
	[COP_CRUSER] [int] NOT NULL,
	[COP_MODUSER] [int] NOT NULL,
	[COP_ID] [int] IDENTITY(100000,1) NOT NULL,
	[COP_PRODUCT_FK] [int] NOT NULL,
	[COP_COMPLAINT_FK] [int] NOT NULL,
	[COP_DATE_LOCAL] [datetime] NULL,
	[COP_ON_OBJECT] [bit] NOT NULL,
	[COP_ADVANCED] [bit] NOT NULL,
	[COP_PRODUCT_TYPE_AC] [bit] NOT NULL,
	[COP_PRODUCT_TYPE_NT] [bit] NOT NULL,
	[COP_PRODUCT_TYPE_LH] [bit] NOT NULL,
	[COP_PRODUCT_TYPE_OT] [bit] NULL,
	[COP_KIND] [varchar](100) NULL,
	[COP_COUNT] [int] NULL,
	[COP_BAD_COUNT] [int] NULL,
	[COP_COLOR_FK] [int] NULL,
	[COP_ROOF_AREA] [int] NULL,
	[COP_SERIAL] [varchar](200) NULL,
	[COP_CBO_CMO] [int] NULL,
	[COP_STAT_PERCENT_COUNT] [decimal](10, 2) NOT NULL,
	[COP_DEFECT_FK] [int] NULL,
	[COP_DEFECT_COUNT] [int] NULL,
	[COP_ORIGINAL_FK] [int] NULL,
 CONSTRAINT [PK_TB_COMPLAINT_INDEMNIFICATION] PRIMARY KEY CLUSTERED 
(
	[COP_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 90) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_COMPLAINT_INDEMNIFICATION_DEFECT]    Script Date: 21-05-2019 12:00:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_COMPLAINT_INDEMNIFICATION_DEFECT](
	[CPD_CRDATE] [datetime] NOT NULL,
	[CPD_MODDATE] [datetime] NOT NULL,
	[CPD_CRUSER] [int] NOT NULL,
	[CPD_MODUSER] [int] NOT NULL,
	[CPD_ID] [int] IDENTITY(100000,1) NOT NULL,
	[CPD_COMPLAINT_PRODUCT_FK] [int] NOT NULL,
	[CPD_DEFECT_FK] [int] NOT NULL,
	[CPD_NOTICE] [varchar](200) NULL,
	[CPD_COUNT] [int] NOT NULL,
	[CPD_STAT_PERCENT_COUNT] [decimal](10, 2) NULL,
	[CPD_MAIN] [bit] NOT NULL,
	[cpd_original_fk] [int] NULL,
 CONSTRAINT [PK_TB_COMPLAINT_INDEMNIFICATION_DEFECT] PRIMARY KEY CLUSTERED 
(
	[CPD_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 90) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_COMPLAINT_NOTE]    Script Date: 21-05-2019 12:00:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_COMPLAINT_NOTE](
	[CON_CRDATE] [datetime] NOT NULL,
	[CON_MODDATE] [datetime] NOT NULL,
	[CON_CRUSER] [int] NOT NULL,
	[CON_MODUSER] [int] NOT NULL,
	[CON_ID] [int] IDENTITY(100000,1) NOT NULL,
	[CON_COMPLAINT_FK] [int] NOT NULL,
	[CON_NOTE] [varchar](2000) NULL,
 CONSTRAINT [PK_TB_COMPLAINT_NOTE] PRIMARY KEY CLUSTERED 
(
	[CON_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_COMPLAINT_PRODUCT]    Script Date: 21-05-2019 12:00:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_COMPLAINT_PRODUCT](
	[COP_CRDATE] [datetime] NOT NULL,
	[COP_MODDATE] [datetime] NOT NULL,
	[COP_CRUSER] [int] NOT NULL,
	[COP_MODUSER] [int] NOT NULL,
	[COP_ID] [int] IDENTITY(100000,1) NOT NULL,
	[COP_PRODUCT_FK] [int] NOT NULL,
	[COP_COMPLAINT_FK] [int] NOT NULL,
	[COP_DATE_LOCAL] [datetime] NULL,
	[COP_ON_OBJECT] [bit] NOT NULL,
	[COP_ADVANCED] [bit] NOT NULL,
	[COP_PRODUCT_TYPE_AC] [bit] NOT NULL,
	[COP_PRODUCT_TYPE_NT] [bit] NOT NULL,
	[COP_PRODUCT_TYPE_LH] [bit] NOT NULL,
	[COP_PRODUCT_TYPE_OT] [bit] NULL,
	[COP_KIND] [varchar](100) NULL,
	[COP_COUNT] [int] NULL,
	[COP_BAD_COUNT] [int] NULL,
	[COP_COLOR_FK] [int] NULL,
	[COP_ROOF_AREA] [int] NULL,
	[COP_SERIAL] [varchar](200) NULL,
	[COP_CBO_CMO] [int] NULL,
	[COP_STAT_PERCENT_COUNT] [decimal](10, 2) NOT NULL,
	[COP_DEFECT_FK] [int] NULL,
	[COP_DEFECT_COUNT] [int] NULL,
	[COP_ORIGINAL_FK] [int] NULL,
	[COP_QM_ACTIVE] [int] NOT NULL,
	[COP_QM_NOTE] [varchar](max) NULL,
	[COP_MAIN] [bit] NOT NULL,
 CONSTRAINT [PK_TB_COMPLAINT_PRODUCT] PRIMARY KEY CLUSTERED 
(
	[COP_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 90) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_COMPLAINT_PRODUCT_DEFECT]    Script Date: 21-05-2019 12:00:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_COMPLAINT_PRODUCT_DEFECT](
	[CPD_CRDATE] [datetime] NOT NULL,
	[CPD_MODDATE] [datetime] NOT NULL,
	[CPD_CRUSER] [int] NOT NULL,
	[CPD_MODUSER] [int] NOT NULL,
	[CPD_ID] [int] IDENTITY(100000,1) NOT NULL,
	[CPD_COMPLAINT_PRODUCT_FK] [int] NOT NULL,
	[CPD_DEFECT_FK] [int] NOT NULL,
	[CPD_NOTICE] [varchar](200) NULL,
	[CPD_COUNT] [int] NOT NULL,
	[CPD_STAT_PERCENT_COUNT] [decimal](10, 2) NULL,
	[CPD_MAIN] [bit] NOT NULL,
	[cpd_original_fk] [int] NULL,
 CONSTRAINT [PK_TB_COMPLAINT_PRODUCT_DEFECT] PRIMARY KEY CLUSTERED 
(
	[CPD_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 90) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_COMPLAINT_PRODUCT_DEFECT_ZALOHA_20160415]    Script Date: 21-05-2019 12:00:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_COMPLAINT_PRODUCT_DEFECT_ZALOHA_20160415](
	[CPD_CRDATE] [datetime] NOT NULL,
	[CPD_MODDATE] [datetime] NOT NULL,
	[CPD_CRUSER] [int] NOT NULL,
	[CPD_MODUSER] [int] NOT NULL,
	[CPD_ID] [int] IDENTITY(100000,1) NOT NULL,
	[CPD_COMPLAINT_PRODUCT_FK] [int] NOT NULL,
	[CPD_DEFECT_FK] [int] NOT NULL,
	[CPD_NOTICE] [varchar](200) NULL,
	[CPD_COUNT] [int] NOT NULL,
	[CPD_STAT_PERCENT_COUNT] [decimal](10, 2) NULL,
	[CPD_MAIN] [bit] NOT NULL,
	[cpd_original_fk] [int] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_COMPLAINT_STATE]    Script Date: 21-05-2019 12:00:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_COMPLAINT_STATE](
	[COS_CRDATE] [datetime] NOT NULL,
	[COS_MODDATE] [datetime] NOT NULL,
	[COS_CRUSER] [int] NOT NULL,
	[COS_MODUSER] [int] NOT NULL,
	[COS_ID] [int] IDENTITY(1000000,1) NOT NULL,
	[COS_COMPLAINT_FK] [int] NOT NULL,
	[COS_STATE_FK] [int] NOT NULL,
	[COS_VALID] [bit] NOT NULL,
	[COS_PERSON_FK] [int] NOT NULL,
 CONSTRAINT [PK_TB_COMPLAINT_STATE] PRIMARY KEY CLUSTERED 
(
	[COS_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 90) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_COMPLAINT_STATE_2015_03_18]    Script Date: 21-05-2019 12:00:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_COMPLAINT_STATE_2015_03_18](
	[COS_CRDATE] [datetime] NOT NULL,
	[COS_MODDATE] [datetime] NOT NULL,
	[COS_CRUSER] [int] NOT NULL,
	[COS_MODUSER] [int] NOT NULL,
	[COS_ID] [int] IDENTITY(1000000,1) NOT NULL,
	[COS_COMPLAINT_FK] [int] NOT NULL,
	[COS_STATE_FK] [int] NOT NULL,
	[COS_VALID] [bit] NOT NULL,
	[COS_PERSON_FK] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_COMPLAINT_STATE_LOG]    Script Date: 21-05-2019 12:00:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_COMPLAINT_STATE_LOG](
	[COL_CRDATE] [datetime] NOT NULL,
	[COL_CRUSER] [int] NOT NULL,
	[COL_ID] [int] IDENTITY(1,1) NOT NULL,
	[COL_DURATION] [int] NOT NULL,
	[COL_COMPLAINT_FK] [int] NOT NULL,
	[COL_STATE_FK] [int] NOT NULL,
 CONSTRAINT [PK_TB_COMPLAINT_STATE_LOG] PRIMARY KEY CLUSTERED 
(
	[COL_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_COMPLAINT_TYPE]    Script Date: 21-05-2019 12:00:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_COMPLAINT_TYPE](
	[COT_CRDATE] [datetime] NOT NULL,
	[COT_MODDATE] [datetime] NOT NULL,
	[COT_CRUSER] [int] NOT NULL,
	[COT_MODUSER] [int] NOT NULL,
	[COT_ID] [int] NOT NULL,
	[COT_NAME_CZ] [varchar](200) NULL,
	[COT_NAME_EN] [varchar](200) NULL,
	[COT_NAME_FR] [varchar](200) NULL,
 CONSTRAINT [PK_TB_COMPLAINT_TYPE] PRIMARY KEY CLUSTERED 
(
	[COT_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 90) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_COUNTRY_PRICE_INDEX]    Script Date: 21-05-2019 12:00:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_COUNTRY_PRICE_INDEX](
	[CPI_ID] [int] IDENTITY(1,1) NOT NULL,
	[CPI_INDEX] [decimal](10, 2) NOT NULL,
	[CPI_COUNTRY_FK] [int] NOT NULL,
	[CPI_PRODTYPE_FK] [int] NOT NULL,
 CONSTRAINT [PK_TB_COUNTRY_PRICE_INDEX] PRIMARY KEY CLUSTERED 
(
	[CPI_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_DEFECT]    Script Date: 21-05-2019 12:00:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_DEFECT](
	[DEF_CRDATE] [datetime] NOT NULL,
	[DEF_MODDATE] [datetime] NOT NULL,
	[DEF_CRUSER] [int] NOT NULL,
	[DEF_MODUSER] [int] NOT NULL,
	[DEF_ID] [int] NOT NULL,
	[DEF_CODE_OLD] [varchar](50) NULL,
	[DEF_NAME_CZ] [varchar](200) NULL,
	[DEF_NAME_EN] [varchar](200) NULL,
	[DEF_B] [bit] NOT NULL,
	[DEF_F] [bit] NOT NULL,
	[DEF_M] [bit] NOT NULL,
	[DEF_U]  AS ((1)),
	[DEF_NAME]  AS ([def_name_cz]),
	[DEF_NAME_FR] [varchar](200) NULL,
	[DEF_CODE_DK] [varchar](50) NULL,
	[DEF_CODE] [varchar](50) NULL,
	[DEF_NEW] [bit] NOT NULL,
	[DEF_PRE] [bit] NOT NULL,
	[DEF_DURABILITY] [int] NULL,
	[DEF_P1] [bit] NOT NULL,
	[DEF_P2] [bit] NOT NULL,
	[DEF_P3] [bit] NOT NULL,
	[DEF_P4] [bit] NOT NULL,
	[DEF_P5] [bit] NOT NULL,
	[DEF_P6] [bit] NOT NULL,
	[DEF_P7] [bit] NOT NULL,
	[DEF_DESCRIPTION] [varchar](4000) NULL,
	[DEF_SOLUTION] [varchar](4000) NULL,
	[DEF_NEW_FK] [int] NULL,
	[DEF_LEVEL] [int] NOT NULL,
	[DEF_L1] [int] NULL,
	[DEF_PARENT] [int] NULL,
	[DEF_OLDCODE_FK] [int] NULL,
	[DEF_STATHIDE] [bit] NOT NULL,
 CONSTRAINT [PK_TB_DEFECT2] PRIMARY KEY CLUSTERED 
(
	[DEF_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 90) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_DEFECT_CODE]    Script Date: 21-05-2019 12:00:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_DEFECT_CODE](
	[DFC_CRUSER] [int] NOT NULL,
	[DFC_MODUSER] [int] NOT NULL,
	[DFC_CRDATE] [datetime] NOT NULL,
	[DFC_MODDATE] [datetime] NOT NULL,
	[DFC_ID] [int] NOT NULL,
	[DFC_CODE] [varchar](50) NOT NULL,
	[DFC_DEFECT_FK] [int] NOT NULL,
	[DFC_DESCRIPTION] [varchar](200) NULL,
	[DFC_ONOBJECT] [bit] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_DEFECT_old]    Script Date: 21-05-2019 12:00:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_DEFECT_old](
	[DEF_CRDATE] [datetime] NOT NULL,
	[DEF_MODDATE] [datetime] NOT NULL,
	[DEF_CRUSER] [int] NOT NULL,
	[DEF_MODUSER] [int] NOT NULL,
	[DEF_ID] [int] IDENTITY(1,1) NOT NULL,
	[DEF_CODE] [varchar](50) NULL,
	[DEF_NAME_CZ] [varchar](200) NULL,
	[DEF_NAME_EN] [varchar](200) NULL,
	[DEF_B] [bit] NOT NULL,
	[DEF_F] [bit] NOT NULL,
	[DEF_M] [bit] NOT NULL,
	[DEF_NAME]  AS ([def_name_cz]),
	[DEF_NAME_FR] [varchar](200) NULL,
	[DEF_CODE_DK] [varchar](50) NULL,
 CONSTRAINT [PK_TB_DEFECT] PRIMARY KEY CLUSTERED 
(
	[DEF_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 90) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_DISTRIB_old]    Script Date: 21-05-2019 12:00:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_DISTRIB_old](
	[DIS_CRDATE] [datetime] NOT NULL,
	[DIS_MODDATE] [datetime] NOT NULL,
	[DIS_CRUSER] [int] NOT NULL,
	[DIS_MODUSER] [int] NOT NULL,
	[DIS_ID] [int] IDENTITY(1,1) NOT NULL,
	[DIS_NAME] [varchar](200) NULL,
	[DIS_STREET] [varchar](200) NULL,
	[DIS_CITY] [varchar](200) NULL,
	[DIS_ZIP] [varchar](50) NULL,
	[DIS_COUNTRY_FK] [int] NOT NULL,
	[DIS_ICO] [varchar](50) NULL,
	[DIS_DIC] [varchar](50) NULL,
	[DIS_PERSON] [varchar](200) NULL,
	[DIS_EMAIL] [varchar](200) NULL,
	[DIS_PHONE] [varchar](200) NULL,
	[DIS_FAX] [varchar](200) NULL,
	[DIS_REGION_FK] [int] NOT NULL,
 CONSTRAINT [PK_TB_DISTRIB] PRIMARY KEY CLUSTERED 
(
	[DIS_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 90) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_DK_COMPLAINT]    Script Date: 21-05-2019 12:00:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_DK_COMPLAINT](
	[dk_crdate] [datetime] NULL,
	[DK_ID] [int] IDENTITY(1,1) NOT NULL,
	[Produkt] [varchar](200) NULL,
	[Oplaegningsaar] [varchar](200) NULL,
	[Adresse_virksomheden] [varchar](200) NULL,
	[Adresse_haandvaerker] [varchar](200) NULL,
	[Udfyldt_af] [varchar](200) NULL,
	[Antal_ejer] [varchar](200) NULL,
	[Indsendt_af] [varchar](200) NULL,
	[Navn_bygning] [varchar](200) NULL,
	[Email_forhandler] [varchar](200) NULL,
	[Mobil_haandvaerker] [varchar](200) NULL,
	[Byggeadresse_bygning] [varchar](200) NULL,
	[Postnummer_bygning] [varchar](200) NULL,
	[By_bygning] [varchar](200) NULL,
	[Byggeadresse_ejer] [varchar](200) NULL,
	[Postnummer_ejer] [varchar](200) NULL,
	[Postnummer_virksomheden] [varchar](200) NULL,
	[By_virksomheden] [varchar](200) NULL,
	[Kontaktperson] [varchar](200) NULL,
	[Postnummer_haandvaerker] [varchar](200) NULL,
	[Kontaktperson_haandvaerker] [varchar](200) NULL,
	[Navn_ejer] [varchar](200) NULL,
	[Virksomhedens_navn] [varchar](200) NULL,
	[Virksomheden_haandvaerker] [varchar](200) NULL,
	[Email_haandvaerker] [varchar](200) NULL,
	[By_ejer] [varchar](200) NULL,
	[Email_ejer] [varchar](200) NULL,
	[Bygningstype_ejer] [varchar](200) NULL,
	[Telefon_ejer] [varchar](200) NULL,
	[Produktionsnummer_maledato] [varchar](200) NULL,
	[Mobil_forhandler] [varchar](200) NULL,
	[Farve_ejer] [varchar](200) NULL,
	[Reklamation_aarsag] [varchar](200) NULL,
	[By_haandvaerker] [varchar](200) NULL,
	[ImageUpload] [varchar](200) NULL,
	[DK_STATE] [int] NOT NULL,
	[DK_COMPLAINT_FK] [int] NULL,
 CONSTRAINT [PK_TB_DK_COMPLAINT] PRIMARY KEY CLUSTERED 
(
	[DK_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_DK_IMPORT]    Script Date: 21-05-2019 12:00:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_DK_IMPORT](
	[DKI_CRDATE] [datetime] NOT NULL,
	[DKI_ID] [int] IDENTITY(1,1) NOT NULL,
	[DKI_COLOR_DK] [varchar](50) NULL,
	[DKI_PRODUCT_DK] [varchar](50) NULL,
	[DKI_COLOR_FK] [int] NULL,
	[DKI_PRODUCT_FK] [int] NULL,
 CONSTRAINT [PK_TB_DK_IMPORT] PRIMARY KEY CLUSTERED 
(
	[DKI_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_DK_IMPORT_PARAMETERS]    Script Date: 21-05-2019 12:00:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_DK_IMPORT_PARAMETERS](
	[ID] [int] NOT NULL,
	[DKI_PRODUCT_DK] [varchar](5) NOT NULL,
	[DKI_COLOR_DK] [varchar](5) NULL,
	[DKI_ENTITY_DK] [varchar](6) NOT NULL,
	[Name] [varchar](500) NOT NULL,
	[DKI_LENGTH] [int] NULL,
	[Barva] [varchar](500) NOT NULL,
	[Poř. Č. CHS] [int] NOT NULL,
	[Scala kód] [varchar](20) NOT NULL,
	[DKI_BAR_SED_DK] [varchar](3) NOT NULL,
	[DKI_PRODUCT_FK] [int] NULL,
	[DKI_USER_FK] [int] NULL,
 CONSTRAINT [PK_TB_DK_IMPORT_PARAMETERS] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_DK_IMPORT_PARAMETERS_2015_12_4]    Script Date: 21-05-2019 12:00:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_DK_IMPORT_PARAMETERS_2015_12_4](
	[ID] [int] NOT NULL,
	[DKI_PRODUCT_DK] [varchar](5) NOT NULL,
	[DKI_COLOR_DK] [varchar](5) NULL,
	[DKI_ENTITY_DK] [varchar](6) NOT NULL,
	[Name] [varchar](500) NOT NULL,
	[DKI_LENGTH] [int] NULL,
	[Barva] [varchar](500) NOT NULL,
	[Poř. Č. CHS] [int] NOT NULL,
	[Scala kód] [varchar](20) NOT NULL,
	[DKI_BAR_SED_DK] [varchar](3) NOT NULL,
	[DKI_PRODUCT_FK] [int] NULL,
	[DKI_USER_FK] [int] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_DOCUMENT_TEMPLATE]    Script Date: 21-05-2019 12:00:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_DOCUMENT_TEMPLATE](
	[DOT_CRDATE] [datetime] NOT NULL,
	[DOT_MODDATE] [datetime] NOT NULL,
	[DOT_CRUSER] [int] NOT NULL,
	[DOT_MODUSER] [int] NOT NULL,
	[DOT_ID] [int] IDENTITY(1,1) NOT NULL,
	[DOT_TYPE_FK] [int] NOT NULL,
	[DOT_DESCRIPTION] [varchar](200) NULL,
	[DOT_FILENAME] [varchar](200) NULL,
	[DOT_GROUP] [varchar](200) NULL,
 CONSTRAINT [PK_TB_DOCUMENT_TEMPLATE] PRIMARY KEY CLUSTERED 
(
	[DOT_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 90) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_DOCUMENT_TEMPLATE_COUNTRY]    Script Date: 21-05-2019 12:00:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_DOCUMENT_TEMPLATE_COUNTRY](
	[DOC_TEMPLATE_FK] [int] NOT NULL,
	[DOC_COUNTRY_FK] [int] NOT NULL,
 CONSTRAINT [PK_TB_DOCUMENT_TEMPLATE_COUNTRY] PRIMARY KEY CLUSTERED 
(
	[DOC_TEMPLATE_FK] ASC,
	[DOC_COUNTRY_FK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_DOCUMENT_TEMPLATE_HISTORY]    Script Date: 21-05-2019 12:00:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_DOCUMENT_TEMPLATE_HISTORY](
	[DOH_ID] [int] IDENTITY(1,1) NOT NULL,
	[DOH_CRDATE] [datetime] NOT NULL,
	[DOH_CRUSER] [int] NOT NULL,
	[DOH_FILENAME] [varchar](200) NOT NULL,
	[DOH_TEMPLATE_FK] [int] NOT NULL,
 CONSTRAINT [PK_TB_DOCUMENT_TEMPLATE_HISTORY] PRIMARY KEY CLUSTERED 
(
	[DOH_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_EDIT]    Script Date: 21-05-2019 12:00:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_EDIT](
	[EDT_CRUSER] [int] NOT NULL,
	[EDT_MODUSER] [int] NOT NULL,
	[EDT_CRDATE] [datetime] NOT NULL,
	[EDT_MODDATE] [datetime] NOT NULL,
	[EDT_ID] [int] NOT NULL,
	[EDT_CHANGE_CZ] [text] NOT NULL,
	[EDT_WHY_CZ] [text] NOT NULL,
	[EDT_CHANGE_EN] [text] NOT NULL,
	[EDT_WHY_EN] [text] NOT NULL,
	[EDT_INTERNAL] [bit] NOT NULL,
 CONSTRAINT [PK_TB_EDIT] PRIMARY KEY CLUSTERED 
(
	[EDT_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_ITEM]    Script Date: 21-05-2019 12:00:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_ITEM](
	[ITM_CRDATE] [datetime] NOT NULL,
	[ITM_MODDATE] [datetime] NOT NULL,
	[ITM_CRUSER] [int] NOT NULL,
	[ITM_MODUSER] [int] NOT NULL,
	[ITM_ID] [int] NOT NULL,
	[ITM_NAME] [varchar](200) NOT NULL,
	[ITM_CODE] [varchar](200) NOT NULL,
	[ITM_TYPE_FK] [int] NOT NULL,
	[ITM_LANGUAGE_FK] [int] NOT NULL,
	[ITM_ORDER] [int] NULL,
	[ITM_CODE_DK] [varchar](50) NULL,
	[ITM_CODE_SCALA] [varchar](50) NULL,
 CONSTRAINT [PK_TB_ITEM] PRIMARY KEY CLUSTERED 
(
	[ITM_ID] ASC,
	[ITM_LANGUAGE_FK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 90) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_ITEM_PRICE_INDEX]    Script Date: 21-05-2019 12:00:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_ITEM_PRICE_INDEX](
	[IPI_ID] [int] IDENTITY(1,1) NOT NULL,
	[IPI_PRICE] [int] NOT NULL,
	[IPI_WEIGHT] [bit] NOT NULL,
	[IPI_ITEM_FK] [int] NOT NULL,
	[IPI_PRICE_CZK] [int] NULL,
 CONSTRAINT [PK_TB_ITEM_PRICE_INDEX] PRIMARY KEY CLUSTERED 
(
	[IPI_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_ITEM_TYPE]    Script Date: 21-05-2019 12:00:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_ITEM_TYPE](
	[ITT_CRDATE] [datetime] NOT NULL,
	[ITT_MODDATE] [datetime] NOT NULL,
	[ITT_CRUSER] [int] NOT NULL,
	[ITT_MODUSER] [int] NOT NULL,
	[ITT_ID] [int] NOT NULL,
	[ITT_NAME] [varchar](50) NOT NULL,
	[ITT_LINK] [varchar](50) NULL,
	[ITT_LANGUAGE_FK] [int] NOT NULL,
 CONSTRAINT [PK_TB_ITEM_TYPE] PRIMARY KEY CLUSTERED 
(
	[ITT_ID] ASC,
	[ITT_LANGUAGE_FK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 90) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_KLIMA]    Script Date: 21-05-2019 12:00:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_KLIMA](
	[KLI_ID] [int] IDENTITY(1,1) NOT NULL,
	[krajKod] [float] NULL,
	[krajNazev] [nvarchar](255) NULL,
	[okresKod] [nvarchar](255) NULL,
	[okresNazev] [nvarchar](255) NULL,
	[obecKod] [nvarchar](255) NULL,
	[obecNazev] [nvarchar](255) NULL,
	[KLI_ELEVATION] [float] NULL,
	[poznamka] [nvarchar](255) NULL,
	[KLI_ELEVATION_TERITORY] [nvarchar](255) NULL,
	[KLI_PSC_FROM] [int] NULL,
	[KLI_PSC_TO] [int] NULL,
	[KLI_SNOW] [float] NULL,
	[KLI_WIND] [float] NULL,
	[kli_teritory] [nvarchar](255) NULL,
	[KLI_COUNTRY_FK] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_LABEL]    Script Date: 21-05-2019 12:00:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_LABEL](
	[LBL_CRDATE] [datetime] NOT NULL,
	[LBL_MODDATE] [datetime] NOT NULL,
	[LBL_CRUSER] [int] NOT NULL,
	[LBL_MODUSER] [int] NOT NULL,
	[LBL_ID] [int] IDENTITY(1,1) NOT NULL,
	[LBL_ABBR] [varchar](100) NOT NULL,
	[LBL_LANGUAGE_FK] [int] NOT NULL,
	[LBL_TEXT] [varchar](8000) NOT NULL,
 CONSTRAINT [PK_TB_LABEL] PRIMARY KEY CLUSTERED 
(
	[LBL_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 90) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_LANGUAGE]    Script Date: 21-05-2019 12:00:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_LANGUAGE](
	[LAN_CRDATE] [datetime] NOT NULL,
	[LAN_MODDATE] [datetime] NOT NULL,
	[LAN_CRUSER] [int] NOT NULL,
	[LAN_MODUSER] [int] NOT NULL,
	[LAN_ID] [int] IDENTITY(1,1) NOT NULL,
	[LAN_NAME] [varchar](50) NOT NULL,
	[LAN_ABBR] [varchar](10) NOT NULL,
	[LAN_ENABLED] [bit] NOT NULL,
 CONSTRAINT [PK_TB_LANGUAGE] PRIMARY KEY CLUSTERED 
(
	[LAN_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 90) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_MESIC_ROK]    Script Date: 21-05-2019 12:00:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_MESIC_ROK](
	[rok] [int] NOT NULL,
	[mesic] [int] NOT NULL,
 CONSTRAINT [PK_TB_MESIC_ROK] PRIMARY KEY CLUSTERED 
(
	[rok] ASC,
	[mesic] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_NO_COMPLAINT]    Script Date: 21-05-2019 12:00:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_NO_COMPLAINT](
	[dk_crdate] [datetime] NULL,
	[DK_ID] [int] IDENTITY(1,1) NOT NULL,
	[Produkt] [varchar](200) NULL,
	[Oplaegningsaar] [varchar](200) NULL,
	[Adresse_virksomheden] [varchar](200) NULL,
	[Adresse_haandvaerker] [varchar](200) NULL,
	[Udfyldt_af] [varchar](200) NULL,
	[Antal_ejer] [varchar](200) NULL,
	[Indsendt_af] [varchar](200) NULL,
	[Navn_bygning] [varchar](200) NULL,
	[Email_forhandler] [varchar](200) NULL,
	[Mobil_haandvaerker] [varchar](200) NULL,
	[Byggeadresse_bygning] [varchar](200) NULL,
	[Postnummer_bygning] [varchar](200) NULL,
	[By_bygning] [varchar](200) NULL,
	[Byggeadresse_ejer] [varchar](200) NULL,
	[Postnummer_ejer] [varchar](200) NULL,
	[Postnummer_virksomheden] [varchar](200) NULL,
	[By_virksomheden] [varchar](200) NULL,
	[Kontaktperson] [varchar](200) NULL,
	[Postnummer_haandvaerker] [varchar](200) NULL,
	[Kontaktperson_haandvaerker] [varchar](200) NULL,
	[Navn_ejer] [varchar](200) NULL,
	[Virksomhedens_navn] [varchar](200) NULL,
	[Virksomheden_haandvaerker] [varchar](200) NULL,
	[Email_haandvaerker] [varchar](200) NULL,
	[By_ejer] [varchar](200) NULL,
	[Email_ejer] [varchar](200) NULL,
	[Bygningstype_ejer] [varchar](200) NULL,
	[Telefon_ejer] [varchar](200) NULL,
	[Produktionsnummer_maledato] [varchar](200) NULL,
	[Mobil_forhandler] [varchar](200) NULL,
	[Farve_ejer] [varchar](200) NULL,
	[Reklamation_aarsag] [varchar](200) NULL,
	[By_haandvaerker] [varchar](200) NULL,
	[ImageUpload] [varchar](200) NULL,
	[DK_STATE] [int] NOT NULL,
	[DK_COMPLAINT_FK] [int] NULL,
 CONSTRAINT [PK_TB_NO_COMPLAINT] PRIMARY KEY CLUSTERED 
(
	[DK_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_PLAN]    Script Date: 21-05-2019 12:00:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_PLAN](
	[PLA_CRDATE] [datetime] NOT NULL,
	[PLA_MODDATE] [datetime] NOT NULL,
	[PLA_CRUSER] [int] NOT NULL,
	[PLA_MODUSER] [int] NOT NULL,
	[PLA_ID] [int] IDENTITY(1,1) NOT NULL,
	[PLA_COMPLAINT_FK] [int] NOT NULL,
	[PLA_USER_FK] [int] NOT NULL,
	[PLA_DATE] [datetime] NOT NULL,
	[PLA_STORNO] [bit] NOT NULL,
	[PLA_NOTE] [varchar](4000) NULL,
 CONSTRAINT [PK_TB_PLAN] PRIMARY KEY CLUSTERED 
(
	[PLA_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_PRODUCT]    Script Date: 21-05-2019 12:00:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_PRODUCT](
	[PRO_CRDATE] [datetime] NOT NULL,
	[PRO_MODDATE] [datetime] NOT NULL,
	[PRO_CRUSER] [int] NOT NULL,
	[PRO_MODUSER] [int] NOT NULL,
	[PRO_ID] [int] IDENTITY(1,1) NOT NULL,
	[PRO_NAME] [varchar](200) NOT NULL,
	[PRO_NAME_EN] [varchar](200) NULL,
	[PRO_SIZE] [varchar](200) NULL,
	[PRO_CODE] [varchar](200) NOT NULL,
	[PRO_CODE_OLD] [varchar](200) NULL,
	[PRO_COLOR_FK] [int] NULL,
	[PRO_WEIGHT] [decimal](18, 3) NULL,
	[PRO_WEIGHT_PC] [int] NULL,
	[PRO_WEIGHT_UNIT]  AS ([PRO_WEIGHT]/case when [PRO_WEIGHT_PC]=(0) then (1) else [PRO_WEIGHT_PC] end),
	[PRO_PACKING] [varchar](200) NULL,
	[PRO_CONSUM] [decimal](18, 2) NOT NULL,
	[PRO_PRICE] [decimal](18, 3) NULL,
	[PRO_GROUP1] [int] NULL,
	[PRO_GROUP2] [int] NULL,
	[PRO_GROUP3] [int] NULL,
	[PRO_CODE_DK] [varchar](50) NULL,
	[PRO_CODE_SCALA] [varchar](50) NULL,
	[PRO_TYPE_KRYTINA] [char](1) NULL,
	[PRO_CODE_INTERN] [varchar](50) NULL,
	[PRO_GROUP1_S] [int] NULL,
	[PRO_SUCCESSOR_FK] [int] NULL,
	[PRO_CODE_EXT] [varchar](50) NULL,
	[PRO_AX_NAME] [varchar](200) NULL,
	[PRO_SCALA_NAME] [varchar](200) NULL,
	[PRO_AX_CODE] [varchar](20) NULL,
	[PRO_NAME_DK] [nvarchar](200) NULL,
	[PRO_CBO_FK] [int] NULL,
 CONSTRAINT [PK_TB_PRODUCTN] PRIMARY KEY CLUSTERED 
(
	[PRO_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 90) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_PRODUCT_2015_05_19]    Script Date: 21-05-2019 12:00:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_PRODUCT_2015_05_19](
	[PRO_CRDATE] [datetime] NOT NULL,
	[PRO_MODDATE] [datetime] NOT NULL,
	[PRO_CRUSER] [int] NOT NULL,
	[PRO_MODUSER] [int] NOT NULL,
	[PRO_ID] [int] IDENTITY(1,1) NOT NULL,
	[PRO_NAME] [varchar](200) NOT NULL,
	[PRO_NAME_EN] [varchar](200) NULL,
	[PRO_SIZE] [varchar](200) NULL,
	[PRO_CODE] [varchar](200) NOT NULL,
	[PRO_CODE_OLD] [varchar](200) NULL,
	[PRO_COLOR_FK] [int] NULL,
	[PRO_WEIGHT] [decimal](18, 3) NULL,
	[PRO_WEIGHT_PC] [int] NULL,
	[PRO_WEIGHT_UNIT] [decimal](29, 14) NULL,
	[PRO_PACKING] [varchar](200) NULL,
	[PRO_CONSUM] [decimal](18, 2) NOT NULL,
	[PRO_PRICE] [decimal](18, 2) NULL,
	[PRO_GROUP1] [int] NULL,
	[PRO_GROUP2] [int] NULL,
	[PRO_GROUP3] [int] NULL,
	[PRO_CODE_DK] [varchar](50) NULL,
	[PRO_CODE_SCALA] [varchar](50) NULL,
	[PRO_TYPE_KRYTINA] [char](1) NULL,
	[PRO_CODE_INTERN] [varchar](50) NULL,
	[PRO_GROUP1_S] [int] NULL,
	[PRO_SUCCESSOR_FK] [int] NULL,
	[PRO_CODE_EXT] [varchar](50) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_PRODUCT_HIERARCHY]    Script Date: 21-05-2019 12:00:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_PRODUCT_HIERARCHY](
	[PRH_ID] [int] IDENTITY(1,1) NOT NULL,
	[PRH_LEVEL] [int] NOT NULL,
	[PRH_NAME] [varchar](100) NOT NULL,
	[PRH_L1] [int] NULL,
	[PRH_L2] [int] NULL,
 CONSTRAINT [PK_TB_PRODUCT_HIERARCHY] PRIMARY KEY CLUSTERED 
(
	[PRH_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_PRODUCT_old]    Script Date: 21-05-2019 12:00:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_PRODUCT_old](
	[PRO_CRDATE] [datetime] NOT NULL,
	[PRO_MODDATE] [datetime] NOT NULL,
	[PRO_CRUSER] [int] NOT NULL,
	[PRO_MODUSER] [int] NOT NULL,
	[PRO_ID] [int] IDENTITY(1,1) NOT NULL,
	[PRO_NAME] [varchar](200) NOT NULL,
	[PRO_SIZE] [varchar](200) NULL,
	[PRO_CODE] [varchar](200) NOT NULL,
	[PRO_COLOR_FK] [int] NOT NULL,
	[PRO_WEIGHT] [decimal](18, 3) NULL,
	[PRO_WEIGHT_PC] [int] NULL,
	[PRO_WEIGHT_UNIT]  AS ([PRO_WEIGHT] / case when ([PRO_WEIGHT_PC] = 0) then 1 else [PRO_WEIGHT_PC] end),
	[PRO_PACKING] [varchar](200) NULL,
	[PRO_CONSUM] [decimal](18, 2) NOT NULL,
	[PRO_PRICE] [decimal](18, 2) NULL,
	[PRO_GROUP1] [int] NULL,
	[PRO_GROUP2] [int] NULL,
	[PRO_GROUP3] [int] NULL,
	[PRO_CODE_DK] [varchar](50) NULL,
	[PRO_CODE_SCALA] [varchar](50) NULL,
	[PRO_TYPE_KRYTINA] [char](1) NULL,
	[PRO_CODE_INTERN] [varchar](50) NULL,
 CONSTRAINT [PK_TB_PRODUCT] PRIMARY KEY CLUSTERED 
(
	[PRO_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 90) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_PRODUCT_PRICE]    Script Date: 21-05-2019 12:00:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_PRODUCT_PRICE](
	[PRP_CRDATE] [datetime] NOT NULL,
	[PRP_MODDATE] [datetime] NULL,
	[PRP_ID] [int] IDENTITY(1,1) NOT NULL,
	[PRP_PRODUCT_FK] [int] NULL,
	[PRP_REGION] [varchar](50) NULL,
	[PRP_PRICE_EUR] [decimal](18, 3) NULL,
	[PRP_PRICE_CURR] [decimal](18, 3) NULL,
	[PRP_CURR] [varchar](50) NULL,
	[PRP_DATE] [datetime] NULL,
 CONSTRAINT [PK_TB_PRODUCT_PRICE] PRIMARY KEY CLUSTERED 
(
	[PRP_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_REALIZ_old]    Script Date: 21-05-2019 12:00:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_REALIZ_old](
	[REA_CRDATE] [datetime] NOT NULL,
	[REA_MODDATE] [datetime] NOT NULL,
	[REA_CRUSER] [int] NOT NULL,
	[REA_MODUSER] [int] NOT NULL,
	[REA_ID] [int] IDENTITY(1,1) NOT NULL,
	[REA_NAME] [varchar](200) NULL,
	[REA_STREET] [varchar](200) NULL,
	[REA_CITY] [varchar](200) NULL,
	[REA_ZIP] [varchar](50) NULL,
	[REA_COUNTRY_FK] [int] NOT NULL,
	[REA_ICO] [varchar](50) NULL,
	[REA_DIC] [varchar](50) NULL,
	[REA_PERSON] [varchar](200) NULL,
	[REA_EMAIL] [varchar](200) NULL,
	[REA_PHONE] [varchar](200) NULL,
	[REA_FAX] [varchar](200) NULL,
	[REA_AUTHORIZED] [bit] NOT NULL,
 CONSTRAINT [PK_TB_REALIZ] PRIMARY KEY CLUSTERED 
(
	[REA_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 90) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_REGION]    Script Date: 21-05-2019 12:00:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_REGION](
	[REG_CRDATE] [datetime] NOT NULL,
	[REG_MODDATE] [datetime] NOT NULL,
	[REG_CRUSER] [int] NOT NULL,
	[REG_MODUSER] [int] NOT NULL,
	[REG_ID] [int] IDENTITY(1,1) NOT NULL,
	[REG_CODE] [varchar](50) NULL,
	[REG_NAME] [varchar](200) NULL,
	[REG_USER_TECH] [int] NOT NULL,
	[REG_USER_MAN] [int] NOT NULL,
	[REG_USER_OBCH] [int] NULL,
	[REG_ZIP_FROM] [int] NULL,
	[REG_ZIP_TO] [int] NULL,
	[REG_LAND] [int] NULL,
 CONSTRAINT [PK_TB_REGION] PRIMARY KEY CLUSTERED 
(
	[REG_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 90) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_SALES]    Script Date: 21-05-2019 12:00:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_SALES](
	[SAL_CRDATE] [datetime] NOT NULL,
	[SAL_CRUSER] [int] NOT NULL,
	[SAL_MODDATE] [datetime] NOT NULL,
	[SAL_MODUSER] [int] NOT NULL,
	[SAL_ID] [int] IDENTITY(1,1) NOT NULL,
	[SAL_DATE] [datetime] NOT NULL,
	[SAL_CBO_CMO] [int] NOT NULL,
	[SAL_GROUP1] [int] NOT NULL,
	[SAL_VALUE] [int] NOT NULL,
 CONSTRAINT [PK_TB_SALES] PRIMARY KEY CLUSTERED 
(
	[SAL_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_SALES_OLD]    Script Date: 21-05-2019 12:00:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_SALES_OLD](
	[SAL_CRDATE] [datetime] NOT NULL,
	[SAL_CRUSER] [int] NOT NULL,
	[SAL_MODDATE] [datetime] NOT NULL,
	[SAL_MODUSER] [int] NOT NULL,
	[SAL_ID] [int] IDENTITY(1,1) NOT NULL,
	[SAL_DATE] [datetime] NOT NULL,
	[SAL_1] [int] NOT NULL,
	[SAL_2] [int] NOT NULL,
	[SAL_3] [int] NOT NULL,
	[SAL_4] [int] NOT NULL,
	[SAL_5] [int] NOT NULL,
	[SAL_6] [int] NOT NULL,
	[SAL_7] [int] NOT NULL,
	[SAL_8] [int] NOT NULL,
	[SAL_9] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_SESTRA]    Script Date: 21-05-2019 12:00:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_SESTRA](
	[SES_CRDATE] [datetime] NOT NULL,
	[SES_MODDATE] [datetime] NOT NULL,
	[SES_CRUSER] [int] NOT NULL,
	[SES_MODUSER] [int] NOT NULL,
	[SES_ID] [int] IDENTITY(1,1) NOT NULL,
	[SES_NAME] [varchar](200) NULL,
	[SES_ADDRESS] [varchar](500) NULL,
 CONSTRAINT [PK_TB_SESTRA] PRIMARY KEY CLUSTERED 
(
	[SES_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_STAT_CATEGORY]    Script Date: 21-05-2019 12:00:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_STAT_CATEGORY](
	[STC_CRDATE] [datetime] NOT NULL,
	[STC_MODDATE] [datetime] NOT NULL,
	[STC_CRUSER] [int] NOT NULL,
	[STC_MODUSER] [int] NOT NULL,
	[STC_ID] [int] IDENTITY(1,1) NOT NULL,
	[STC_PARENT_FK] [int] NULL,
	[STC_ORDER] [int] NOT NULL,
 CONSTRAINT [PK_TB_STAT_CATEGORY] PRIMARY KEY CLUSTERED 
(
	[STC_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 90) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_STAT_CATEGORY_FILE]    Script Date: 21-05-2019 12:00:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_STAT_CATEGORY_FILE](
	[SCF_CRDATE] [datetime] NOT NULL,
	[SCF_MODDATE] [datetime] NOT NULL,
	[SCF_CRUSER] [int] NOT NULL,
	[SCF_MODUSER] [int] NOT NULL,
	[SCF_ID] [int] IDENTITY(1,1) NOT NULL,
	[SCF_CATEGORY_FK] [int] NOT NULL,
	[SCF_FILENAME] [varchar](200) NULL,
 CONSTRAINT [PK_TB_STAT_CATEGORY_FILE] PRIMARY KEY CLUSTERED 
(
	[SCF_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 90) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_STAT_CATEGORY_FILE_TEXT]    Script Date: 21-05-2019 12:00:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_STAT_CATEGORY_FILE_TEXT](
	[SFT_CRDATE] [datetime] NOT NULL,
	[SFT_MODDATE] [datetime] NOT NULL,
	[SFT_CRUSER] [int] NOT NULL,
	[SFT_MODUSER] [int] NOT NULL,
	[SFT_ID] [int] IDENTITY(1,1) NOT NULL,
	[SFT_FILE_FK] [int] NOT NULL,
	[SFT_LANGUAGE_FK] [int] NOT NULL,
	[SFT_NAME] [varchar](200) NOT NULL,
 CONSTRAINT [PK_TB_STAT_CATEGORY_FILE_TEXT] PRIMARY KEY CLUSTERED 
(
	[SFT_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 90) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_STAT_CATEGORY_TEXT]    Script Date: 21-05-2019 12:00:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_STAT_CATEGORY_TEXT](
	[SCT_CRDATE] [datetime] NOT NULL,
	[SCT_MODDATE] [datetime] NOT NULL,
	[SCT_CRUSER] [int] NOT NULL,
	[SCT_MODUSER] [int] NOT NULL,
	[SCT_ID] [int] IDENTITY(1,1) NOT NULL,
	[SCT_CATEGORY_FK] [int] NOT NULL,
	[SCT_LANGUAGE_FK] [int] NOT NULL,
	[SCT_NAME] [varchar](200) NOT NULL,
 CONSTRAINT [PK_TB_STAT_CATEGORY_TEXT] PRIMARY KEY CLUSTERED 
(
	[SCT_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 90) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_STAT_STATE]    Script Date: 21-05-2019 12:00:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_STAT_STATE](
	[SST_CRDATE] [datetime] NOT NULL,
	[SST_ID] [int] IDENTITY(1,1) NOT NULL,
	[SST_COMPLAINT_FK] [int] NOT NULL,
	[SST_STATE_FK] [int] NULL,
 CONSTRAINT [PK_TB_STAT_STATE] PRIMARY KEY CLUSTERED 
(
	[SST_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 90) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_STAT_STATE_WEEK]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_STAT_STATE_WEEK](
	[SSW_ID] [int] IDENTITY(1,1) NOT NULL,
	[SSW_WEEK] [int] NOT NULL,
	[SSW_YEAR] [int] NOT NULL,
	[SSW_COMPLAINT_FK] [int] NOT NULL,
	[SSW_STATE_FK] [int] NULL,
 CONSTRAINT [PK_TB_STAT_STATE_WEEK] PRIMARY KEY CLUSTERED 
(
	[SSW_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 90) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_TIME]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_TIME](
	[TIM_ID] [int] NOT NULL,
	[TIM_NAME] [varchar](200) NULL,
	[TIM_TYPE_FK] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_TIME_TYPE]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_TIME_TYPE](
	[TIT_ID] [int] NOT NULL,
	[TIT_NAME] [varchar](200) NULL,
 CONSTRAINT [PK_TB_TIME_TYPE] PRIMARY KEY CLUSTERED 
(
	[TIT_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 90) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_USER]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_USER](
	[USR_CRDATE] [datetime] NOT NULL,
	[USR_MODDATE] [datetime] NOT NULL,
	[USR_CRUSER] [int] NOT NULL,
	[USR_MODUSER] [int] NOT NULL,
	[USR_ID] [int] IDENTITY(1,1) NOT NULL,
	[USR_LOGIN] [nvarchar](50) NOT NULL,
	[USR_PASSWORD] [nvarchar](50) NOT NULL,
	[USR_NAME] [nvarchar](200) NULL,
	[USR_EMAIL] [nvarchar](500) NULL,
	[USR_PHONE] [nvarchar](50) NULL,
	[USR_ROLE_FK] [int] NOT NULL,
	[USR_PRICEROLE_FK] [int] NOT NULL,
	[USR_ENABLED] [bit] NOT NULL,
	[USR_LANGUAGE_FK] [int] NOT NULL,
	[USR_FILTER_STATE_FK] [int] NULL,
	[USR_PRICETO] [int] NULL,
 CONSTRAINT [PK_TB_USER] PRIMARY KEY CLUSTERED 
(
	[USR_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 90) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_USER_2015_03_18]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_USER_2015_03_18](
	[USR_CRDATE] [datetime] NOT NULL,
	[USR_MODDATE] [datetime] NOT NULL,
	[USR_CRUSER] [int] NOT NULL,
	[USR_MODUSER] [int] NOT NULL,
	[USR_ID] [int] IDENTITY(1,1) NOT NULL,
	[USR_LOGIN] [nvarchar](50) NOT NULL,
	[USR_PASSWORD] [nvarchar](50) NOT NULL,
	[USR_NAME] [nvarchar](200) NULL,
	[USR_EMAIL] [nvarchar](500) NULL,
	[USR_PHONE] [nvarchar](50) NULL,
	[USR_ROLE_FK] [int] NOT NULL,
	[USR_PRICEROLE_FK] [int] NOT NULL,
	[USR_ENABLED] [bit] NOT NULL,
	[USR_LANGUAGE_FK] [int] NOT NULL,
	[USR_FILTER_STATE_FK] [int] NULL,
	[USR_PRICETO] [int] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_USER_COUNTRY]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_USER_COUNTRY](
	[URC_CRDATE] [datetime] NOT NULL,
	[URC_MODDATE] [datetime] NOT NULL,
	[URC_CRUSER] [int] NOT NULL,
	[URC_MODUSER] [int] NOT NULL,
	[URC_ID] [int] IDENTITY(1,1) NOT NULL,
	[URC_USER_FK] [int] NULL,
	[URC_COUNTRY_FK] [int] NULL,
	[URC_OPEN] [bit] NOT NULL,
 CONSTRAINT [PK_TB_USER_COUNTRY] PRIMARY KEY CLUSTERED 
(
	[URC_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_USER_DEFECT]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_USER_DEFECT](
	[URD_CRDATE] [datetime] NOT NULL,
	[URD_MODDATE] [datetime] NOT NULL,
	[URD_CRUSER] [int] NOT NULL,
	[URD_MODUSER] [int] NOT NULL,
	[URD_ID] [int] IDENTITY(1,1) NOT NULL,
	[URD_USER_FK] [int] NOT NULL,
	[URD_DEFECT_FK] [int] NOT NULL,
 CONSTRAINT [PK_TB_USER_DEFECT] PRIMARY KEY CLUSTERED 
(
	[URD_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_USER_ENTITY]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_USER_ENTITY](
	[URE_CRDATE] [datetime] NOT NULL,
	[URE_MODDATE] [datetime] NOT NULL,
	[URE_CRUSER] [int] NOT NULL,
	[URE_MODUSER] [int] NOT NULL,
	[URE_ID] [int] IDENTITY(1,1) NOT NULL,
	[URE_USER_FK] [int] NOT NULL,
	[URE_ENTITY_FK] [int] NOT NULL,
 CONSTRAINT [PK_TB_USER_ENTITY] PRIMARY KEY CLUSTERED 
(
	[URE_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_USER_PRICEROLE]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_USER_PRICEROLE](
	[UPR_CRDATE] [datetime] NOT NULL,
	[UPR_MODDATE] [datetime] NOT NULL,
	[UPR_CRUSER] [int] NOT NULL,
	[UPR_MODUSER] [int] NOT NULL,
	[UPR_ID] [int] IDENTITY(1,1) NOT NULL,
	[UPR_NAME] [varchar](200) NOT NULL,
	[UPR_PRICEFROM] [int] NOT NULL,
	[UPR_PRICETO] [int] NOT NULL,
	[UPR_PEOPLECOUNT] [int] NOT NULL,
 CONSTRAINT [PK_TB_USER_PRICEROLE] PRIMARY KEY CLUSTERED 
(
	[UPR_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 90) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_USER_ROLE]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_USER_ROLE](
	[URR_CRDATE] [datetime] NOT NULL,
	[URR_MODDATE] [datetime] NOT NULL,
	[URR_CRUSER] [int] NOT NULL,
	[URR_MODUSER] [int] NOT NULL,
	[URR_ID] [int] NOT NULL,
	[URR_NAME] [varchar](200) NULL,
 CONSTRAINT [PK_TB_USER_ROLE] PRIMARY KEY CLUSTERED 
(
	[URR_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 90) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_USER_ROLENEW]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_USER_ROLENEW](
	[URN_CRDATE] [datetime] NOT NULL,
	[URN_MODDATE] [datetime] NOT NULL,
	[URN_CRUSER] [int] NOT NULL,
	[URN_MODUSER] [int] NOT NULL,
	[URN_ID] [int] NOT NULL,
	[URN_NAME] [varchar](200) NULL,
	[URN_STATENAME] [varchar](200) NULL,
	[URN_OLDSTATES] [int] NULL,
	[URN_ISSTATE] [bit] NOT NULL,
	[URN_ISROLE] [bit] NOT NULL,
	[URN_CODE] [varchar](50) NULL,
	[URN_ISSTATEOLD] [bit] NOT NULL,
	[URN_STATINDEX] [int] NULL,
 CONSTRAINT [PK_TB_USER_ROLENEW] PRIMARY KEY CLUSTERED 
(
	[URN_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_USER_ROLENEW_ASSIGN]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_USER_ROLENEW_ASSIGN](
	[URA_CRDATE] [datetime] NOT NULL,
	[URA_MODDATE] [datetime] NOT NULL,
	[URA_CRUSER] [int] NOT NULL,
	[URA_MODUSER] [int] NOT NULL,
	[URA_ID] [int] IDENTITY(1,1) NOT NULL,
	[URA_USER_FK] [int] NOT NULL,
	[URA_ROLENEW_FK] [int] NOT NULL,
	[URA_RIGHT] [int] NOT NULL,
 CONSTRAINT [PK_TB_USER_ROLENEW_ASSIGN] PRIMARY KEY CLUSTERED 
(
	[URA_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tmp]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tmp](
	[datum] [datetime] NULL,
	[ks] [int] NULL,
	[cena] [int] NULL
) ON [PRIMARY]
GO
/****** Object:  View [dbo].[V_STAT_CALCULATION]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[V_STAT_CALCULATION]
AS
SELECT     CCA_COMPLAINT_FK AS ccaComplaintFk, ISNULL(SUM(CCA_PRICE_EURO), 0) AS ccaPrice
FROM         dbo.TB_COMPLAINT_CALCULATION
GROUP BY CCA_COMPLAINT_FK
GO
/****** Object:  View [dbo].[V_STAT_PRODUCT]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[V_STAT_PRODUCT]
AS
SELECT     dbo.TB_COMPLAINT_PRODUCT.COP_COMPLAINT_FK AS copComplaintFk, dbo.TB_COMPLAINT_PRODUCT.COP_PRODUCT_FK AS copProductFk, 
                      dbo.TB_COMPLAINT_PRODUCT.COP_BAD_COUNT AS copCount, dbo.TB_COMPLAINT_PRODUCT.COP_PRODUCT_TYPE_AC AS ac, 
                      dbo.TB_COMPLAINT_PRODUCT.COP_PRODUCT_TYPE_NT AS nt, dbo.TB_COMPLAINT_PRODUCT.COP_PRODUCT_TYPE_LH AS lh, 
                      dbo.TB_COMPLAINT_PRODUCT.COP_ROOF_AREA AS copRoofArea, dbo.TB_PRODUCT.PRO_WEIGHT_UNIT AS proWeight, dbo.TB_PRODUCT.PRO_PRICE AS proPrice,
                       dbo.TB_COMPLAINT_PRODUCT_DEFECT.CPD_COUNT AS cpdCount, dbo.TB_DEFECT.DEF_ID AS defID, dbo.TB_DEFECT.DEF_NAME AS defName, 
                      dbo.TB_DEFECT.DEF_CODE AS defCode, dbo.TB_DEFECT.DEF_L1 AS defL1, dbo.TB_DEFECT.DEF_PARENT AS defParent
FROM         dbo.TB_COMPLAINT_PRODUCT INNER JOIN
                      dbo.TB_PRODUCT ON dbo.TB_PRODUCT.PRO_ID = dbo.TB_COMPLAINT_PRODUCT.COP_PRODUCT_FK INNER JOIN
                      dbo.TB_COMPLAINT_PRODUCT_DEFECT ON 
                      dbo.TB_COMPLAINT_PRODUCT_DEFECT.CPD_COMPLAINT_PRODUCT_FK = dbo.TB_COMPLAINT_PRODUCT.COP_ID INNER JOIN
                      dbo.TB_DEFECT ON dbo.TB_DEFECT.DEF_ID = dbo.TB_COMPLAINT_PRODUCT_DEFECT.CPD_DEFECT_FK
GO
/****** Object:  View [dbo].[V_STAT_PRODUCT_GROUPED]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[V_STAT_PRODUCT_GROUPED]
AS
SELECT    src.copComplaintFk, src.defID, isnull(nullif(sum(src.copCount),0),1) AS copCount, isnull(nullif(sum(src.cpdCount),0),1) AS cpdCount,
(select  isnull(nullif(sum(copCount),0),1) from V_STAT_PRODUCT dsc where src.copComplaintFk=dsc.copComplaintFk) as copSum,
(select  isnull(nullif(sum(cpdCount),0),1) from V_STAT_PRODUCT dsc2 where src.copComplaintFk=dsc2.copComplaintFk) as cpdSum
FROM         dbo.V_STAT_PRODUCT src
GROUP BY src.copComplaintFk, src.defID










GO
/****** Object:  View [dbo].[V_STAT_PRODUCT_GROUPED_FINAL]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[V_STAT_PRODUCT_GROUPED_FINAL]
AS
SELECT     copComplaintFk,defID,((copCount*1.00)/(copSum*1.00)) copCountWeight
FROM         dbo.V_STAT_PRODUCT_GROUPED






GO
/****** Object:  View [dbo].[V_STAT_CALCULATION_PRODUCT]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[V_STAT_CALCULATION_PRODUCT]
AS
SELECT     dbo.V_STAT_CALCULATION.ccaComplaintFk, dbo.V_STAT_PRODUCT_GROUPED_FINAL.defID, 
                      dbo.V_STAT_CALCULATION.ccaPrice * dbo.V_STAT_PRODUCT_GROUPED_FINAL.copCountWeight AS ccaPriceWeight
FROM         dbo.V_STAT_CALCULATION INNER JOIN
                      dbo.V_STAT_PRODUCT_GROUPED_FINAL ON dbo.V_STAT_PRODUCT_GROUPED_FINAL.copComplaintFk = dbo.V_STAT_CALCULATION.ccaComplaintFk



GO
/****** Object:  View [dbo].[V_STAT_BASIC]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE view [dbo].[V_STAT_BASIC] as 
SELECT     c.COM_ID AS comID, c.COM_DATE_ENTER AS comDateEnter, c.COM_CUSTOMER_FK AS comCustomerFk, 
                      c.COM_F2_LOCAL_DATE AS comF2LocalDate, c.COM_CONSTRUCTION_FK AS comConstructionFk, c.COM_F2_PERCENT_OBCH AS comF2PercentObch, 
                      c.COM_F2_PERCENT_PRAV AS comF2PercentPrav, 
                      com_f2_local_year as comf2localyear,COM_F1_RIDGES,
                      CASE year(com_date_enter) 
                      WHEN 2004 THEN c.com_bfm + country.itm_code + RIGHT('000' + CONVERT(varchar(3), c.com_number), 3) + RIGHT('00' + year(c.com_date_enter), 2) 
                      WHEN 2003 THEN c.com_bfm + country.itm_code + RIGHT('000' + CONVERT(varchar(3), c.com_number), 3) + RIGHT('00' + year(c.com_date_enter), 2) 
                      WHEN 2002 THEN c.com_bfm + country.itm_code + RIGHT('000' + CONVERT(varchar(3), c.com_number), 3) + RIGHT('00' + year(c.com_date_enter), 2) 
                      WHEN 2001 THEN c.com_bfm + country.itm_code + RIGHT('000' + CONVERT(varchar(3), c.com_number), 3) + RIGHT('00' + year(c.com_date_enter), 2) 
                      WHEN 2000 THEN c.com_bfm + country.itm_code + RIGHT('000' + CONVERT(varchar(3), c.com_number), 3) + RIGHT('00' + year(c.com_date_enter), 2) 
                      WHEN 1999 THEN c.com_bfm + country.itm_code + RIGHT('000' + CONVERT(varchar(3), c.com_number), 3) + RIGHT('00' + year(c.com_date_enter), 2) 
                      WHEN 1998 THEN c.com_bfm + country.itm_code + RIGHT('000' + CONVERT(varchar(3), c.com_number), 3) + RIGHT('00' + year(c.com_date_enter), 2) 
                      ELSE country.itm_code + RIGHT('0000' + CONVERT(varchar(4), c.com_number), 4) + RIGHT('00' + year(c.com_date_enter), 2) END AS comCode, 
                      state.URN_STATENAME AS state_name, state.urn_ID AS state_id, country.ITM_ID AS country_id, country.ITM_CODE AS country_code, 
                      country.ITM_NAME AS country_name, c.COM_BFM,
                          (SELECT     COUNT(*) AS Expr1
                            FROM          dbo.TB_COMPLAINT AS repeated
                            WHERE      (COM_ID <> c.COM_ID) AND (COM_CONSTRUCTION_FK = c.COM_CONSTRUCTION_FK) AND 
                                                   (COM_DATE_ENTER >= c.COM_DATE_ENTER)) AS repeated,
                          (SELECT     COUNT(*) AS Expr1
                            FROM          dbo.TB_COMPLAINT AS rr
                            WHERE      (COM_EXTEND = c.COM_ID)) AS rr, c.COM_F2_PLOCHA_REKLAMOVANE
FROM         dbo.TB_COMPLAINT AS c INNER JOIN
                      dbo.TB_ITEM AS country ON country.ITM_ID = c.COM_COUNTRY_FK AND country.ITM_TYPE_FK = 3 AND country.ITM_LANGUAGE_FK = 1 INNER JOIN
                      dbo.TB_COMPLAINT_STATE ON c.COM_ID = dbo.TB_COMPLAINT_STATE.COS_COMPLAINT_FK AND 
                      dbo.TB_COMPLAINT_STATE.COS_VALID = 1 INNER JOIN
                      dbo.TB_user_rolenew AS state ON state.urn_ID = dbo.TB_COMPLAINT_STATE.COS_STATE_FK 
WHERE     (c.COM_DELETED = 0) AND (c.COM_COUNTRY_FK <> 215) AND (c.COM_COUNTRY_FK <> 338)



GO
/****** Object:  View [dbo].[CORV_DUPLICTY]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [dbo].[CORV_DUPLICTY] as 
select distinct (comcode) comCode,a.com_id from tb_complaint a inner join tb_complaint b on 
a.com_id>b.com_id 
and a.com_number=b.com_number
and a.com_country_fk=b.com_country_fk
and year(a.com_date_enter)=year(b.com_date_enter) 

inner join v_stat_basic on a.com_id = comId
where a.com_deleted = 0 and b.com_deleted = 0 and year(a.com_crdate)>2005 and year(a.com_date_enter)>2007
GO
/****** Object:  View [dbo].[V_STAT_CALCULATION_REAL]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[V_STAT_CALCULATION_REAL]
AS
SELECT     CCR_COMPLAINT_FK AS ccrComplaintFk, CCR_TYPE_FK AS ccrTypeFk, ISNULL(SUM(CCR_PRICE_EURO), 0) AS ccrPrice
FROM         dbo.TB_COMPLAINT_CALCULATION_REAL
GROUP BY CCR_COMPLAINT_FK, CCR_TYPE_FK
GO
/****** Object:  View [dbo].[V_STAT_CALCULATION_REAL_PRODUCT]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[V_STAT_CALCULATION_REAL_PRODUCT]
AS
SELECT     ccrComplaintFk, defID,ccrTypeFk, ccrPrice * copCountWeight AS ccrPriceWeight
FROM         V_STAT_CALCULATION_REAL INNER JOIN V_STAT_PRODUCT_GROUPED_FINAL ON (copComplaintFk = ccrComplaintFk)





GO
/****** Object:  View [dbo].[_vdefk20a]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [dbo].[_vdefk20a] as 
Select distinct comId, def from _defk20
GO
/****** Object:  View [dbo].[_vdefk20_ruznevady]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [dbo].[_vdefk20_ruznevady] as 
select a.Comid from _vdefk20a a inner join _vdefk20a b on (a.comId = b.comId and a.def<>b.def)
GO
/****** Object:  View [dbo].[v_reklamace_tuny]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [dbo].[v_reklamace_tuny] as 
select cop_complaint_fk coptComplaint,sum(COP_BAD_COUNT*PRO_WEIGHT_UNIT)*1.0/1000.0 coptTuny from tb_complaint_product inner join tb_product on (cop_product_fk=pro_id )
group by cop_complaint_fk
GO
/****** Object:  View [dbo].[V_STAT_PRODUCED]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER OFF
GO

/*------------------------------------------------------------------------------------
 Pridava rok vyroby z identifikace zakazky
------------------------------------------------------------------------------------*/
CREATE VIEW [dbo].[V_STAT_PRODUCED]
AS
SELECT     V_STAT_BASIC.*,
produced=isnull(comf2localyear,(CASE  SIGN(substring(com_f2_local_ident,2,2)-50)  
      WHEN '1' THEN '19'+substring(com_f2_local_ident,2,2)
      ELSE 			'20'+substring(com_f2_local_ident,2,2)
END ) )

FROM         dbo.V_STAT_BASIC left outer join tb_complaint on (com_id=comID and  isnumeric(substring(com_f2_local_ident,2,2))=1)



GO
/****** Object:  View [dbo].[v_reklamace_tuny_price_detailed]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[v_reklamace_tuny_price_detailed]
AS
SELECT        dbo.V_STAT_PRODUCED.comID, dbo.V_STAT_PRODUCED.comCode, cbo.ITM_NAME AS cbo, dbo.TB_COMPLAINT_PRODUCT.COP_BAD_COUNT * dbo.TB_PRODUCT.PRO_WEIGHT_UNIT * 1.0 / 1000.0 AS TUNY, 
                         dbo.v_reklamace_tuny.coptTuny, CALCULATION_REAL.replacements, CALCULATION_REAL.labour, CALCULATION_REAL.freight, CALCULATION_REAL.other, dbo.V_STAT_PRODUCED.produced, 
                         dbo.V_STAT_PRODUCED.comDateEnter, dbo.TB_DEFECT.DEF_CODE, dbo.TB_DEFECT.DEF_NAME, gr1.ITM_NAME AS gr1, gr1s.ITM_NAME AS gr1s, dbo.TB_COMPLAINT_PRODUCT.COP_ON_OBJECT, 
                         dbo.TB_DEFECT.DEF_PRE, dbo.TB_DEFECT.DEF_ID, dbo.TB_COMPLAINT_PRODUCT.COP_CBO_CMO, dbo.TB_PRODUCT.PRO_GROUP1, dbo.TB_PRODUCT.PRO_GROUP1_S, dbo.TB_DEFECT.DEF_L1, 
                         dbo.TB_DEFECT.DEF_PARENT
FROM            dbo.V_STAT_PRODUCED INNER JOIN
                         dbo.TB_COMPLAINT ON dbo.V_STAT_PRODUCED.comID = dbo.TB_COMPLAINT.COM_ID LEFT OUTER JOIN
                         dbo.TB_COMPLAINT_PRODUCT ON dbo.TB_COMPLAINT.COM_ID = dbo.TB_COMPLAINT_PRODUCT.COP_COMPLAINT_FK LEFT OUTER JOIN
                         dbo.TB_PRODUCT ON dbo.TB_COMPLAINT_PRODUCT.COP_PRODUCT_FK = dbo.TB_PRODUCT.PRO_ID LEFT OUTER JOIN
                         dbo.TB_ITEM AS gr1 ON dbo.TB_PRODUCT.PRO_GROUP1 = gr1.ITM_ID AND gr1.ITM_LANGUAGE_FK = 1 LEFT OUTER JOIN
                         dbo.TB_ITEM AS gr1s ON dbo.TB_PRODUCT.PRO_GROUP1_S = gr1s.ITM_ID AND gr1s.ITM_LANGUAGE_FK = 1 LEFT OUTER JOIN
                         dbo.TB_ITEM AS cbo ON dbo.TB_COMPLAINT_PRODUCT.COP_CBO_CMO = cbo.ITM_ID AND cbo.ITM_LANGUAGE_FK = 1 LEFT OUTER JOIN
                         dbo.TB_COMPLAINT_PRODUCT_DEFECT ON dbo.TB_COMPLAINT_PRODUCT_DEFECT.CPD_COMPLAINT_PRODUCT_FK = dbo.TB_COMPLAINT_PRODUCT.COP_ID AND 
                         dbo.TB_COMPLAINT_PRODUCT_DEFECT.CPD_MAIN = 1 LEFT OUTER JOIN
                         dbo.TB_DEFECT ON dbo.TB_COMPLAINT_PRODUCT_DEFECT.CPD_DEFECT_FK = dbo.TB_DEFECT.DEF_ID LEFT OUTER JOIN
                         dbo.v_reklamace_tuny ON dbo.v_reklamace_tuny.coptComplaint = dbo.V_STAT_PRODUCED.comID LEFT OUTER JOIN
                             (SELECT        CCR_COMPLAINT_FK, SUM(CASE WHEN CCR_TYPE_FK = 1 THEN CCR_PRICE_EURO ELSE 0 END) AS replacements, SUM(CASE WHEN CCR_TYPE_FK = 2 THEN CCR_PRICE_EURO ELSE 0 END) 
                                                         AS labour, SUM(CASE WHEN CCR_TYPE_FK = 3 THEN CCR_PRICE_EURO ELSE 0 END) AS freight, SUM(CASE WHEN CCR_TYPE_FK = 5 THEN CCR_PRICE_EURO ELSE 0 END) AS other
                               FROM            dbo.TB_COMPLAINT_CALCULATION_REAL
                               GROUP BY CCR_COMPLAINT_FK) AS CALCULATION_REAL ON CALCULATION_REAL.CCR_COMPLAINT_FK = dbo.TB_COMPLAINT.COM_ID
WHERE        (dbo.TB_COMPLAINT.COM_DELETED = 0) AND (dbo.TB_DEFECT.DEF_PRE = 1)
GO
/****** Object:  View [dbo].[export_full]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE view [dbo].[export_full]
as 
select comId,comcode,cop_id,pro_id,pro_code,pro_name,cop_cbo_cmo,cmo.itm_name as cmoName,cop_Count,cop_bad_count,cpd_id, cpd_defect_fk,def_code,def_name,cpd_count
 from v_stat_basic 
left outer join tb_complaint_product on (comID=cop_complaint_fk)
left outer join tb_product on (cop_product_fk=pro_id)
left outer join tb_item as cmo on (cop_cbo_cmo=itm_id and itm_language_fk=1)
left outer join tb_complaint_product_defect on (cpd_complaint_product_fk=cop_id)
left outer join tb_defect on (cpd_defect_fk=def_id)
where year(comDateEnter)=2004

GO
/****** Object:  View [dbo].[_stat_complaint_product]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[_stat_complaint_product]
AS
SELECT     COP_ID, COP_COMPLAINT_FK, COP_COUNT, COP_BAD_COUNT, COP_PRODUCT_FK, COP_ON_OBJECT, COP_CBO_CMO, COP_ROOF_AREA, 
                      COP_PRODUCT_TYPE_AC AS cops_product_type_ac, COP_PRODUCT_TYPE_NT AS cops_product_type_nt, 
                      COP_PRODUCT_TYPE_LH AS cops_product_type_lh, COP_PRODUCT_TYPE_OT AS cops_product_type_ot,
                          (SELECT     SUM(COP_BAD_COUNT) AS Expr1
                            FROM          dbo.TB_COMPLAINT_PRODUCT AS x
                            WHERE      (COP_COMPLAINT_FK = src.COP_COMPLAINT_FK)) AS cop_bad_total, COP_DEFECT_FK
FROM         dbo.TB_COMPLAINT_PRODUCT AS src
GO
/****** Object:  View [dbo].[_stat_complaint_product_percent]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[_stat_complaint_product_percent]
AS
SELECT     COP_ID AS cops_id, COP_COUNT AS cops_count, COP_COMPLAINT_FK AS cops_complaint_fk, COP_BAD_COUNT AS cops_bad_count, 
                      COP_PRODUCT_FK AS cops_product_fk, cop_bad_total AS cops_bad_total, COP_ON_OBJECT AS cops_on_object, COP_CBO_CMO AS cops_cbo_cmo, 
                      COP_ROOF_AREA AS cops_roof_area, cops_product_type_ac, cops_product_type_nt, cops_product_type_lh, cops_product_type_ot, 
                      (COP_BAD_COUNT * 1.0) / ((CASE cop_bad_total WHEN 0 THEN 1 ELSE cop_bad_total END) * 1.0) 
                      * (CASE cop_bad_total WHEN 0 THEN 1 ELSE 100 END) AS cops_percent, COP_DEFECT_FK AS cops_Defect_fk
FROM         dbo._stat_complaint_product
GO
/****** Object:  View [dbo].[_stat_complaint_product_defect]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE view [dbo].[_stat_complaint_product_defect] 
as
select cpd_id,cpd_defect_fk,cop_complaint_fk as cpd_complaint_fk,cpd_complaint_product_fk,cpd_count,cop_bad_total as cpd_bad_total
from tb_complaint_product_defect inner join _stat_complaint_product on( cpd_complaint_product_fk=cop_id)



GO
/****** Object:  View [dbo].[TB_ADDRESS]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[TB_ADDRESS]
AS
SELECT     ADR_CRDATE, ADR_MODDATE, ADR_CRUSER, ADR_MODUSER, ADR_ID, ADR_OLDID, ADR_NAME, ADR_STREET, ADR_CITY, ADR_ZIP, ADR_COUNTRY_FK, 
                      ADR_ICO, ADR_DIC, ADR_PERSON, ADR_EMAIL, ADR_PHONE, ADR_FAX, ADR_REGION_FK, ADR_KLIMA_FK, ADR_ZARUKA_ID, ADR_ZARUKA_INFO, ADR_DELETED, 
                      ADR_ZARUKA_CREATED, ADR_ENDUSER, ADR_DISTRIB, ADR_ROOF, ADR_OTHER, ADR_IMPORTTYPE, ADR_AUTHORIZED
FROM         dbo.TB_ADDRESS_NEW
WHERE     (ADR_IMPORTTYPE IN (1, 2))
GO
/****** Object:  View [dbo].[TB_DISTRIB]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[TB_DISTRIB]
AS
SELECT     ADR_CRDATE AS DIS_CRDATE, ADR_MODDATE AS DIS_MODDATE, ADR_CRUSER AS DIS_CRUSER, ADR_MODUSER AS DIS_MODUSER, ADR_ID AS DIS_ID, 
                      ADR_NAME AS DIS_NAME, ADR_STREET AS DIS_STREET, ADR_CITY AS DIS_CITY, ADR_ZIP AS DIS_ZIP, ADR_COUNTRY_FK AS DIS_COUNTRY_FK, 
                      ADR_ICO AS DIS_ICO, ADR_DIC AS DIS_DIC, ADR_PERSON AS DIS_PERSON, ADR_EMAIL AS DIS_EMAIL, ADR_PHONE AS DIS_PHONE, ADR_FAX AS DIS_FAX, 
                      ADR_REGION_FK AS DIS_REGION_FK, ADR_DISTRIB, ADR_IMPORTTYPE, ADR_OLDID
FROM         dbo.TB_ADDRESS_NEW
WHERE     (ADR_IMPORTTYPE IN (1, 2))
GO
/****** Object:  View [dbo].[V_PLAN]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE view [dbo].[V_PLAN] as

select tb_plan.*, comId, comCode,
zak.adr_name as zakName, zak.adr_street as zakStreet, zak.adr_city as zakCity, zak.adr_zip as zakZip,
sta.adr_name as staName, sta.adr_street as staStreet, sta.adr_city as staCity, sta.adr_zip as staZip,
tb_distrib.*,
itm_name as vyrSk,itm_language_fk,
reg_code, reg_name
from tb_plan inner join tb_user on (pla_user_fk=usr_id)
 inner join tb_complaint on (pla_complaint_fk=com_id) inner join v_stat_basic on (com_id=comId)
left outer join tb_address zak on (zak.adr_id = com_customer_fk)
left outer join tb_address sta on (sta.adr_id = com_construction_fk)
left outer join tb_distrib on (dis_id = com_distrib_fk)
left outer join tb_item on (itm_type_fk=25 and itm_id=com_f1_group1_fk and itm_language_fk=1)
left outer join tb_region on (isnumeric(sta.adr_zip)=1 and sta.adr_zip>=reg_zip_from and sta.adr_zip<=reg_zip_to )

GO
/****** Object:  View [dbo].[_stat_complaint_product_defect_percent]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE view [dbo].[_stat_complaint_product_defect_percent]
as
select cpd_id as cpds_id,cpd_defect_fk as cpds_defect_fk,cpd_complaint_fk as cpds_complaint_fk,cpd_complaint_product_fk as cpds_complaint_product_fk,cpd_count as cpds_count,cpd_bad_total as cpds_bad_count,
(cpd_count*1.0)/((case cpd_bad_total when 0 then 1 else cpd_bad_total end )*1.0)*(case cpd_bad_total when 0 then 1 else 100 end )  as cpds_percent
from  _stat_complaint_product_defect



GO
/****** Object:  View [dbo].[vdk_imported]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [dbo].[vdk_imported] as  
select  distinct com_id,pro_id

from tb_complaint inner join v_Stat_basic on (com_id=com_id)
inner join tb_complaint_product on cop_complaint_fk=com_id
inner join tb_product on cop_product_fk=pro_id
inner join tb_item  c on c.itm_id = pro_color_fk and c.itm_language_fk=1
left outer  join tb_defect on (cop_defect_fk=def_id)

where com_country_fk=33 and year(com_crdate)=2009 and month(com_crdate)=9 and day(com_crdate)=17
GO
/****** Object:  View [dbo].[_stat_complaint_product_defect2]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE view [dbo].[_stat_complaint_product_defect2] 
as
select cop_complaint_fk as copx_complaint_fk,cop_product_fk as copx_product_fk,cpd_defect_fk as cpdx_defect_fk,sum(cpd_count) as cpdx_count
from tb_complaint_product_defect inner join tb_complaint_product on (cop_id=cpd_complaint_product_fk)
group by cop_complaint_fk,cpd_defect_fk,cop_product_fk

GO
/****** Object:  View [dbo].[_stat_complaint_product_defect2_1]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE view [dbo].[_stat_complaint_product_defect2_1] 
as
select copx_complaint_fk as copxx_complaint_fk,copx_product_fk as copxx_product_fk,sum(cpdx_count) as cpdxx_count
from _stat_complaint_product_defect2 
group by copx_complaint_fk,copx_product_fk

GO
/****** Object:  View [dbo].[_stat_complaint_product_defect2_percent]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE view [dbo].[_stat_complaint_product_defect2_percent] 
as
select copxx_complaint_fk as cops_complaint_fk,copxx_product_fk as cops_product_fk,cpdx_defect_fk as cpds_defect_fk,
cpdx_count as cops_bad_count,
cop_id as cops_id,cop_on_object as cops_on_object, cop_cbo_cmo as cops_cbo_cmo,cop_roof_area as cops_roof_area,
cop_product_type_ac as cops_product_type_ac,cop_product_type_nt as cops_product_type_nt,cop_product_type_lh as cops_product_type_lh,cop_product_type_ot as cop_product_type_ot,
(cpdx_count*1.0)/((case cpdxx_count when 0 then 1 else cpdxx_count end )*1.0)*(case cpdxx_count when 0 then 1 else 100 end )  as cops_percent
from _stat_complaint_product_defect2_1 
inner join _stat_complaint_product_defect2 on (copx_complaint_fk=copxx_complaint_fk and copxx_product_fk=copx_product_fk)
inner join tb_complaint_product on (cop_complaint_fk=copx_complaint_fk and cop_product_fk=copx_product_fk)

GO
/****** Object:  View [dbo].[_v__cz_naklady_2015]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [dbo].[_v__cz_naklady_2015] as 
select _cz_naklady_2015.*, CCR_TEXT, CCR_PRICE,LEFT(CCR_text,CHARINDEX('-',CCR_text)-1) as txt
 from _cz_naklady_2015 inner join v_stat_basic on idr=comCode 
inner join TB_COMPLAINT_CALCULATION_REAL on (CCR_COMPLAINT_FK=comID)
where CCR_text like '%-%' and  LEFT(CCR_text,CHARINDEX('-',CCR_text)-1)=dokl
GO
/****** Object:  View [dbo].[_stat_2011_09_22]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE View [dbo].[_stat_2011_09_22] as
select com_id as comId1,count(distinct cop_id) as cnt,(select sum(isnull(ccr_price,0)) from tb_complaint_calculation_real where ccr_complaint_fk=com_id ) as price1, sum(cop_bad_count*pro_weight_Unit/1000) as CelkemTuny
from tb_complaint 
inner join tb_complaint_product on cop_complaint_fk=com_Id
inner join tb_product on cop_product_fk=pro_id
group by com_id
GO
/****** Object:  View [dbo].[v_reklamace_tuny_price_old]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
/*and comId>=13289
order by comId*/
CREATE VIEW [dbo].[v_reklamace_tuny_price_old]
AS
SELECT     dbo.V_STAT_PRODUCED.comID, dbo.V_STAT_PRODUCED.comCode, gr1.ITM_NAME AS gr1, gr3.ITM_NAME AS gr3, cbo.ITM_NAME AS cbo, 
                      dbo.V_STAT_PRODUCED.produced, dbo.TB_COMPLAINT_PRODUCT.COP_PRODUCT_TYPE_AC, dbo.TB_COMPLAINT_PRODUCT.COP_PRODUCT_TYPE_NT, 
                      dbo.TB_COMPLAINT_PRODUCT.COP_PRODUCT_TYPE_LH, dbo.TB_COMPLAINT_PRODUCT.COP_PRODUCT_TYPE_OT, 
                      dbo.TB_COMPLAINT_PRODUCT.COP_BAD_COUNT, 
                      dbo.TB_COMPLAINT_PRODUCT.COP_BAD_COUNT * dbo.TB_PRODUCT.PRO_WEIGHT_UNIT * 1.0 / 1000.0 AS TUNY, dbo.V_STAT_PRODUCED.country_code, 
                      dat.COS_CRDATE, dat.COS_MODDATE, YEAR(dbo.V_STAT_PRODUCED.comDateEnter) AS rok, 
                      dbo.TB_COMPLAINT_PRODUCT.COP_COUNT * dbo.TB_PRODUCT.PRO_WEIGHT_UNIT * 1.0 / 1000.0 AS tunydODANE, dbo.TB_DEFECT.DEF_CODE, 
                      dbo.TB_COMPLAINT.COM_F2_PERCENT_OBCH, 
                      dbo.TB_COMPLAINT_PRODUCT.COP_BAD_COUNT * dbo.TB_PRODUCT.PRO_WEIGHT_UNIT * 1.0 / 1000.0 AS tunyRadek, dbo.v_reklamace_tuny.coptTuny,
                          (SELECT     SUM(CCR_PRICE_EURO) AS Expr1
                            FROM          dbo.TB_COMPLAINT_CALCULATION_REAL
                            WHERE      (CCR_COMPLAINT_FK = dbo.TB_COMPLAINT.COM_ID)) AS cenaCelkem, dbo.TB_COMPLAINT.COM_F1_ORIG_ID
FROM         dbo.V_STAT_PRODUCED INNER JOIN
                      dbo.TB_COMPLAINT ON dbo.V_STAT_PRODUCED.comID = dbo.TB_COMPLAINT.COM_ID LEFT OUTER JOIN
                      dbo.TB_COMPLAINT_PRODUCT ON dbo.TB_COMPLAINT.COM_ID = dbo.TB_COMPLAINT_PRODUCT.COP_COMPLAINT_FK LEFT OUTER JOIN
                      dbo.TB_PRODUCT ON dbo.TB_COMPLAINT_PRODUCT.COP_PRODUCT_FK = dbo.TB_PRODUCT.PRO_ID LEFT OUTER JOIN
                      dbo.TB_ITEM AS gr1 ON dbo.TB_PRODUCT.PRO_GROUP1 = gr1.ITM_ID AND gr1.ITM_LANGUAGE_FK = 1 LEFT OUTER JOIN
                      dbo.TB_ITEM AS gr3 ON dbo.TB_PRODUCT.PRO_GROUP3 = gr3.ITM_ID AND gr3.ITM_LANGUAGE_FK = 1 LEFT OUTER JOIN
                      dbo.TB_ITEM AS cbo ON dbo.TB_COMPLAINT_PRODUCT.COP_CBO_CMO = cbo.ITM_ID AND cbo.ITM_LANGUAGE_FK = 1 LEFT OUTER JOIN
                      dbo.TB_COMPLAINT_STATE AS dat ON dbo.TB_COMPLAINT.COM_ID = dat.COS_COMPLAINT_FK AND dat.COS_STATE_FK = 136 LEFT OUTER JOIN
                      dbo.TB_COMPLAINT_PRODUCT_DEFECT ON dbo.TB_COMPLAINT_PRODUCT_DEFECT.CPD_COMPLAINT_PRODUCT_FK = dbo.TB_COMPLAINT_PRODUCT.COP_ID AND
                       dbo.TB_COMPLAINT_PRODUCT_DEFECT.CPD_MAIN = 1 LEFT OUTER JOIN
                      dbo.TB_DEFECT ON dbo.TB_COMPLAINT_PRODUCT_DEFECT.CPD_DEFECT_FK = dbo.TB_DEFECT.DEF_ID LEFT OUTER JOIN
                      dbo._stat_2011_09_22 ON dbo._stat_2011_09_22.comId1 = dbo.V_STAT_PRODUCED.comID LEFT OUTER JOIN
                      dbo.v_reklamace_tuny ON dbo.v_reklamace_tuny.coptComplaint = dbo.V_STAT_PRODUCED.comID
WHERE     (dbo.TB_COMPLAINT.COM_DELETED = 0)
GO
/****** Object:  View [dbo].[v_reklamace_tuny_price]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
/*and comId>=13289
order by comId*/
CREATE VIEW [dbo].[v_reklamace_tuny_price]
AS
SELECT     dbo.V_STAT_PRODUCED.comID, dbo.V_STAT_PRODUCED.comCode, gr1.ITM_NAME AS gr1, gr3.ITM_NAME AS gr3, cbo.ITM_NAME AS cbo, 
                      dbo.V_STAT_PRODUCED.produced, dbo.TB_COMPLAINT_PRODUCT.COP_PRODUCT_TYPE_AC, dbo.TB_COMPLAINT_PRODUCT.COP_PRODUCT_TYPE_NT, 
                      dbo.TB_COMPLAINT_PRODUCT.COP_PRODUCT_TYPE_LH, dbo.TB_COMPLAINT_PRODUCT.COP_PRODUCT_TYPE_OT, 
                      dbo.TB_COMPLAINT_PRODUCT.COP_BAD_COUNT, 
                      dbo.TB_COMPLAINT_PRODUCT.COP_BAD_COUNT * dbo.TB_PRODUCT.PRO_WEIGHT_UNIT * 1.0 / 1000.0 AS TUNY, dbo.V_STAT_PRODUCED.country_code, 
                      dat.COS_CRDATE, dat.COS_MODDATE, YEAR(dbo.V_STAT_PRODUCED.comDateEnter) AS rok, 
                      dbo.TB_COMPLAINT_PRODUCT.COP_COUNT * dbo.TB_PRODUCT.PRO_WEIGHT_UNIT * 1.0 / 1000.0 AS tunydODANE, dbo.TB_DEFECT.DEF_CODE, 
                      dbo.TB_COMPLAINT.COM_F2_PERCENT_OBCH, 
                      dbo.TB_COMPLAINT_PRODUCT.COP_BAD_COUNT * dbo.TB_PRODUCT.PRO_WEIGHT_UNIT * 1.0 / 1000.0 AS tunyRadek, dbo.v_reklamace_tuny.coptTuny,
                          (SELECT     SUM(CCR_PRICE_EURO) AS Expr1
                            FROM          dbo.TB_COMPLAINT_CALCULATION_REAL
                            WHERE      (CCR_COMPLAINT_FK = dbo.TB_COMPLAINT.COM_ID)) AS cenaCelkem, dbo.TB_COMPLAINT.COM_F1_ORIG_ID, dbo.TB_PRODUCT.PRO_GROUP1, 
                      dbo.TB_PRODUCT.PRO_GROUP1_S, dbo.TB_COMPLAINT.COM_F2_LOCAL_IDENT, dbo.V_STAT_PRODUCED.comF2LocalDate, 
                      dbo.V_STAT_PRODUCED.comDateEnter, dbo.TB_COMPLAINT_PRODUCT.COP_CBO_CMO, dbo.TB_COMPLAINT_PRODUCT.COP_ON_OBJECT, 
                      dbo.V_STAT_PRODUCED.country_id, dbo.TB_DEFECT.DEF_L1, dbo.TB_DEFECT.DEF_LEVEL, dbo.TB_DEFECT.DEF_PARENT, dbo.TB_DEFECT.DEF_NAME, 
                      dbo.TB_DEFECT.DEF_NAME_EN, dbo.TB_DEFECT.DEF_NAME_CZ
FROM         dbo.V_STAT_PRODUCED INNER JOIN
                      dbo.TB_COMPLAINT ON dbo.V_STAT_PRODUCED.comID = dbo.TB_COMPLAINT.COM_ID LEFT OUTER JOIN
                      dbo.TB_COMPLAINT_PRODUCT ON dbo.TB_COMPLAINT.COM_ID = dbo.TB_COMPLAINT_PRODUCT.COP_COMPLAINT_FK LEFT OUTER JOIN
                      dbo.TB_PRODUCT ON dbo.TB_COMPLAINT_PRODUCT.COP_PRODUCT_FK = dbo.TB_PRODUCT.PRO_ID LEFT OUTER JOIN
                      dbo.TB_ITEM AS gr1 ON dbo.TB_PRODUCT.PRO_GROUP1 = gr1.ITM_ID AND gr1.ITM_LANGUAGE_FK = 1 LEFT OUTER JOIN
                      dbo.TB_ITEM AS gr3 ON dbo.TB_PRODUCT.PRO_GROUP3 = gr3.ITM_ID AND gr3.ITM_LANGUAGE_FK = 1 LEFT OUTER JOIN
                      dbo.TB_ITEM AS cbo ON dbo.TB_COMPLAINT_PRODUCT.COP_CBO_CMO = cbo.ITM_ID AND cbo.ITM_LANGUAGE_FK = 1 LEFT OUTER JOIN
                      dbo.TB_COMPLAINT_STATE AS dat ON dbo.TB_COMPLAINT.COM_ID = dat.COS_COMPLAINT_FK AND dat.COS_STATE_FK = 136 LEFT OUTER JOIN
                      dbo.TB_COMPLAINT_PRODUCT_DEFECT ON dbo.TB_COMPLAINT_PRODUCT_DEFECT.CPD_COMPLAINT_PRODUCT_FK = dbo.TB_COMPLAINT_PRODUCT.COP_ID AND
                       dbo.TB_COMPLAINT_PRODUCT_DEFECT.CPD_MAIN = 1 LEFT OUTER JOIN
                      dbo.TB_DEFECT ON dbo.TB_COMPLAINT_PRODUCT_DEFECT.CPD_DEFECT_FK = dbo.TB_DEFECT.DEF_ID LEFT OUTER JOIN
                      dbo._stat_2011_09_22 ON dbo._stat_2011_09_22.comId1 = dbo.V_STAT_PRODUCED.comID LEFT OUTER JOIN
                      dbo.v_reklamace_tuny ON dbo.v_reklamace_tuny.coptComplaint = dbo.V_STAT_PRODUCED.comID
WHERE     (dbo.TB_COMPLAINT.COM_DELETED = 0)
GO
/****** Object:  View [dbo].[_prod_defects2]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [dbo].[_prod_defects2] as
select cop_complaint_fk, cpd_id, cpd_main, cpd_defect_fk from tb_complaint_product inner join TB_COMPLAINT_PRODUCT_DEFECT on (CPD_COMPLAINT_PRODUCT_FK=cop_id)
where cpd_main=0
GO
/****** Object:  View [dbo].[_prod_defects3]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [dbo].[_prod_defects3] as
select cpd_id as cpdId, count(*) as cnt from _prod_defects2 inner join _ppd on cop_complaint_fk=id and defId=cpd_defect_fk
group by cpd_id
GO
/****** Object:  View [dbo].[V_COMPLAINT_BASIC]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE VIEW [dbo].[V_COMPLAINT_BASIC]
AS
SELECT        dbo.TB_COMPLAINT.COM_CRDATE, dbo.TB_COMPLAINT.COM_MODDATE, dbo.TB_COMPLAINT.COM_CRUSER, dbo.TB_COMPLAINT.COM_MODUSER, dbo.TB_COMPLAINT.COM_ID, dbo.TB_COMPLAINT.COM_NUMBER, 
                         dbo.TB_COMPLAINT.COM_BFM, dbo.TB_COMPLAINT.COM_COUNTRY_FK, dbo.TB_COMPLAINT.COM_DATE_ENTER, dbo.TB_COMPLAINT.COM_DISTRIB_FK, dbo.TB_COMPLAINT.COM_CUSTOMER_FK, 
                         dbo.TB_COMPLAINT.COM_CONSTRUCTION_FK, dbo.TB_COMPLAINT.COM_DATE_DELIVERED, dbo.TB_COMPLAINT.COM_TECH_FK, dbo.TB_COMPLAINT.COM_MAN_FK, dbo.TB_COMPLAINT.COM_INVOICE, 
                         dbo.TB_COMPLAINT.COM_REPEAT, dbo.TB_COMPLAINT.COM_EXTEND, dbo.TB_COMPLAINT.COM_TYPE_FK, dbo.TB_COMPLAINT.COM_NOTICE, dbo.TB_COMPLAINT.COM_F2_LOCAL_PERS, 
                         dbo.TB_COMPLAINT.COM_F2_LOCAL_DATE, dbo.TB_COMPLAINT.COM_F2_STOCK, dbo.TB_COMPLAINT.COM_F2_STOCK_BAD, dbo.TB_COMPLAINT.COM_F2_LOCAL_NOTICE, dbo.TB_COMPLAINT.COM_F2_OBJECT_TYPE, 
                         dbo.TB_COMPLAINT.COM_F2_REALIZ_FK, dbo.TB_COMPLAINT.COM_F2_REALIZ_AUTOR, dbo.TB_COMPLAINT.COM_F2_REALIZ_DATE, dbo.TB_COMPLAINT.COM_F2_CALAMITY, 
                         dbo.TB_COMPLAINT.COM_F2_CALAMITY_DATE, dbo.TB_COMPLAINT.COM_F3_CALAMITY_TYPE, dbo.TB_COMPLAINT.COM_F2_ROOF, dbo.TB_COMPLAINT.COM_F2_VENTIALTION_FK, 
                         dbo.TB_COMPLAINT.COM_F2_VENTILATION_OTHER, dbo.TB_COMPLAINT.COM_F2_DEFECTS, dbo.TB_COMPLAINT.COM_F2_VENTILATION_ITEM, dbo.TB_COMPLAINT.COM_F2_VENTILATION_YES, 
                         dbo.TB_COMPLAINT.COM_F2_FOLIE, dbo.TB_COMPLAINT.COM_F2_FOLIE_FK, dbo.TB_COMPLAINT.COM_F3_FOLIE_TYPE, dbo.TB_COMPLAINT.COM_F2_SLOPE, dbo.TB_COMPLAINT.COM_F2_SLOPE_AREA, 
                         dbo.TB_COMPLAINT.COM_F2_ROOFT_FK, dbo.TB_COMPLAINT.COM_F2_ROOFT_OTHER, dbo.TB_COMPLAINT.COM_F2_ORIENT, dbo.TB_COMPLAINT.COM_F2_HEIGHT, dbo.TB_COMPLAINT.COM_F2_TAKE_FK, 
                         dbo.TB_COMPLAINT.COM_F2_INSERT_FK, dbo.TB_COMPLAINT.COM_F2_MATERIAL_FK, dbo.TB_COMPLAINT.COM_F2_MATERIAL_OTHER, dbo.TB_COMPLAINT.COM_F2_AVERAGE, dbo.TB_COMPLAINT.COM_F2_PAD, 
                         dbo.TB_COMPLAINT.COM_F2_COVER, dbo.TB_COMPLAINT.COM_F2_SNOW1, dbo.TB_COMPLAINT.COM_F2_SNOW2, dbo.TB_COMPLAINT.COM_F2_GUTTER_FK, dbo.TB_COMPLAINT.COM_F2_GUTTER_OTHER, 
                         dbo.TB_COMPLAINT.COM_F2_OTHER_DESC, dbo.TB_COMPLAINT.COM_F2_CUSTOMER_DATE, dbo.TB_COMPLAINT.COM_F2_CUSTOMER_DESC, dbo.TB_COMPLAINT.COM_F2_SPECIALIST_DATE, 
                         dbo.TB_COMPLAINT.COM_F2_SPECIALIST_DESC, dbo.TB_COMPLAINT.COM_F2_SPECIALIST_YES, dbo.TB_COMPLAINT.COM_F2_SOLUTION_PERSON, dbo.TB_COMPLAINT.COM_F2_SOLUTION_DATE, 
                         dbo.TB_COMPLAINT.COM_F2_SOLUTION_DESC, dbo.TB_COMPLAINT.COM_F2_COMB, dbo.TB_COMPLAINT.COM_F2_LOAD_DATE, dbo.TB_COMPLAINT.COM_F3_PERSON_DONE, dbo.TB_COMPLAINT.COM_F3_DATE_DONE, 
                         dbo.TB_COMPLAINT.COM_F3_PERSON_PASS, dbo.TB_COMPLAINT.COM_F3_PERSON_PASSa, dbo.TB_COMPLAINT.COM_F3_DATE_PASS, dbo.TB_COMPLAINT.COM_F3_DATE_PASSa, dbo.TB_COMPLAINT.COM_F3_DESC, 
                         dbo.TB_COMPLAINT.COM_F3_DESCa, dbo.TB_COMPLAINT.COM_F3_SECONDSTEP, dbo.TB_COMPLAINT.COM_F3_NUMBER, dbo.TB_COMPLAINT.COM_F3_NUMBER_TYPE, dbo.TB_COMPLAINT.COM_F3_NUMBER_TYPE_FK, 
                         dbo.TB_COMPLAINT.COM_F3B_DATE, dbo.TB_COMPLAINT.COM_F3B_PERSON, dbo.TB_COMPLAINT.COM_F4_DATE, dbo.TB_COMPLAINT.COM_F4_PERSON, dbo.TB_COMPLAINT.COM_F5_CAUSE, 
                         dbo.TB_COMPLAINT.COM_F5_PROVIDE, dbo.TB_COMPLAINT.COM_F6_WARE, dbo.TB_COMPLAINT.COM_F6_WARE_DATE, dbo.TB_COMPLAINT.COM_F6_GWR, dbo.TB_COMPLAINT.COM_F6_GWR_DATE, 
                         dbo.TB_COMPLAINT.COM_F6_COMP, dbo.TB_COMPLAINT.COM_F6_COMP_DATE, dbo.TB_COMPLAINT.COM_F6_OTHER, dbo.TB_COMPLAINT.COM_F6_OTHER_DATE, dbo.TB_COMPLAINT.COM_F6_CLOSE_DATE, 
                         dbo.TB_COMPLAINT.COM_F2_LOCAL_IDENT, dbo.TB_COMPLAINT.COM_F3B_COMMENT, dbo.TB_COMPLAINT.COM_DELETED, dbo.TB_COMPLAINT.COM_LASTIMPORT, dbo.TB_COMPLAINT.COM_F2_PERCENT_OBCH, 
                         dbo.TB_COMPLAINT.COM_F2_PERCENT_PRAV, dbo.TB_COMPLAINT.COM_F2_LATH, dbo.TB_COMPLAINT.COM_F2_EXCEEDING, dbo.TB_COMPLAINT.COM_F6_NOTE, dbo.TB_COMPLAINT.COM_PERSON_COM, 
                         dbo.TB_COMPLAINT.COM_PERSON_EXPED, dbo.TB_COMPLAINT.COM_F3_HISTORY, dbo.TB_COMPLAINT.COM_F1_ORIG_ID, dbo.TB_COMPLAINT.COM_F1_GROUP1_FK, dbo.TB_COMPLAINT.COM_F2_PLOCHA_DODANE, 
                         dbo.TB_COMPLAINT.COM_F2_PLOCHA_REKLAMOVANE, dbo.TB_COMPLAINT.COM_F1_ZAKAZ, dbo.TB_COMPLAINT.COM_F1_DOC, dbo.TB_COMPLAINT.COM_NOTE, dbo.TB_COMPLAINT.COM_URGENT, 
                         dbo.TB_COMPLAINT.COM_NEW, dbo.TB_COMPLAINT.COM_F2_ROOF_FK, dbo.TB_COMPLAINT.COM_F2_SISTER, dbo.TB_COMPLAINT.COM_F5_SISTERDATE, dbo.TB_COMPLAINT.COM_F2_SISTERDATE, 
                         dbo.TB_COMPLAINT.COM_F3B_BACK, dbo.TB_COMPLAINT.COM_CHANGED, dbo.TB_COMPLAINT.COM_CHANGEDESCRIPTION, dbo.TB_COMPLAINT.COM_F2_EXTERIOR_TYPE, 
                         dbo.TB_COMPLAINT.COM_F2_EXTERIOR_OTHER, dbo.TB_COMPLAINT.COM_F2_GRID, dbo.TB_COMPLAINT.COM_F2_GRID_OTHER, dbo.TB_COMPLAINT.COM_F2_SPARA_HORIZONT, 
                         dbo.TB_COMPLAINT.COM_F2_SPARA_VERTIKAL, dbo.TB_COMPLAINT.COM_F2_INTERSPACE, dbo.TB_COMPLAINT.COM_F2_ISOLATION, dbo.TB_COMPLAINT.COM_F2_WORK, dbo.TB_COMPLAINT.COM_F2_WORK_DEFECT, 
                         dbo.TB_COMPLAINT.COM_F2_MATERIAL_SLIDING, dbo.TB_COMPLAINT.COM_F2_MATERIAL_FIXED, dbo.TB_COMPLAINT.COM_F2_ORIENT_EXTERIOR, dbo.TB_COMPLAINT.COM_F2_ELEVATION_EXTERIOR, 
                         dbo.TB_COMPLAINT.COM_F1_FR_STOP, dbo.TB_COMPLAINT.COM_F1_E, country.ITM_ID AS country_id, country.ITM_CODE AS country_code, country.ITM_NAME AS country_name, dbo.TB_USER.USR_NAME, 
                         dbo.TB_USER.USR_ID, state.URN_STATENAME AS state_name, state.URN_ID AS state_id, country.ITM_LANGUAGE_FK AS country_language_fk, 1 AS state_language_fk, dbo.TB_COMPLAINT_STATE.COS_PERSON_FK, 
                         dbo.TB_COMPLAINT.COM_F1_INSURANCE, dbo.TB_COMPLAINT.COM_F1_CBO_CMO, dbo.TB_COMPLAINT.COM_AX_CLAIM_NUMBER, dbo.TB_COMPLAINT.COM_QM_FK, dbo.TB_COMPLAINT.COM_F1_FLS, 
                         dbo.TB_COMPLAINT.com_f2_local_year, dbo.TB_COMPLAINT.COM_F2_DK_PRICE, dbo.TB_COMPLAINT.COM_F1_COLOR, dbo.TB_COMPLAINT.COM_F1_RIDGES
FROM            dbo.TB_COMPLAINT INNER JOIN
                         dbo.TB_ITEM AS country ON country.ITM_ID = dbo.TB_COMPLAINT.COM_COUNTRY_FK AND country.ITM_TYPE_FK = 3 INNER JOIN
                         dbo.TB_COMPLAINT_STATE ON dbo.TB_COMPLAINT.COM_ID = dbo.TB_COMPLAINT_STATE.COS_COMPLAINT_FK AND dbo.TB_COMPLAINT_STATE.COS_VALID = 1 INNER JOIN
                         dbo.TB_USER ON dbo.TB_COMPLAINT_STATE.COS_PERSON_FK = dbo.TB_USER.USR_ID INNER JOIN
                         dbo.TB_USER_ROLENEW AS state ON state.URN_ID = dbo.TB_COMPLAINT_STATE.COS_STATE_FK
WHERE        (dbo.TB_COMPLAINT.COM_DELETED = 0)

GO
/****** Object:  View [dbo].[v_complaint_basic_cz]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[v_complaint_basic_cz]
AS
SELECT     *
FROM         dbo.V_COMPLAINT_BASIC
WHERE     (country_language_fk = 1) AND (state_language_fk = 1)


GO
/****** Object:  View [dbo].[_vdefk20]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE view [dbo].[_vdefk20] as 
select distinct comId, def_id as defId, def_code as defCode, def, cop_id as copId from _defk20 inner join tb_defect on (def_code = def)
inner join tb_complaint_product on (cop_complaint_fk = comId)
--korekce na reklamce z exceuco maji ruzne vady
where comId not in (select comId from  _vdefk20_ruznevady)
GO
/****** Object:  View [dbo].[_stat_complaint_product_old]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [dbo].[_stat_complaint_product_old] as 
SELECT     COP_ID, COP_COMPLAINT_FK, COP_COUNT, COP_BAD_COUNT, COP_PRODUCT_FK, COP_ON_OBJECT, COP_CBO_CMO, COP_ROOF_AREA, 
                      COP_PRODUCT_TYPE_AC AS cops_product_type_ac, COP_PRODUCT_TYPE_NT AS cops_product_type_nt, 
                      COP_PRODUCT_TYPE_LH AS cops_product_type_lh, COP_PRODUCT_TYPE_OT AS cops_product_type_ot,
                          (SELECT     SUM(COP_BAD_COUNT) AS Expr1
                            FROM          dbo.TB_COMPLAINT_PRODUCT AS x
                            WHERE      (COP_COMPLAINT_FK = src.COP_COMPLAINT_FK)) AS cop_bad_total, COP_original_FK
FROM         dbo.TB_COMPLAINT_PRODUCT AS src
GO
/****** Object:  View [dbo].[_stat_complaint_product_percent_old]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [dbo].[_stat_complaint_product_percent_old] as 
SELECT     COP_ID AS cops_id, COP_COUNT AS cops_count, COP_COMPLAINT_FK AS cops_complaint_fk, COP_BAD_COUNT AS cops_bad_count, 
                      COP_PRODUCT_FK AS cops_product_fk, cop_bad_total AS cops_bad_total, COP_ON_OBJECT AS cops_on_object, COP_CBO_CMO AS cops_cbo_cmo, 
                      COP_ROOF_AREA AS cops_roof_area, cops_product_type_ac, cops_product_type_nt, cops_product_type_lh, cops_product_type_ot, 
                      (COP_BAD_COUNT * 1.0) / ((CASE cop_bad_total WHEN 0 THEN 1 ELSE cop_bad_total END) * 1.0) 
                      * (CASE cop_bad_total WHEN 0 THEN 1 ELSE 100 END) AS cops_percent, COP_original_FK AS cops_Defect_fk
FROM         dbo._stat_complaint_product_old
GO
/****** Object:  View [dbo].[__x]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [dbo].[__x] as 
select max(cos_id)  as cosId,cos_complaint_fk from tb_complaint_state where cos_complaint_fk in(
select com_id from tb_complaint where com_id not in (select cos_complaint_fk from tb_complaint_state where cos_valid=1)
)
group by cos_complaint_fk
GO
/****** Object:  View [dbo].[_com_f1_cbo_cmo]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[_com_f1_cbo_cmo]
AS
SELECT DISTINCT dbo.TB_COMPLAINT.COM_ID AS comid, dbo.TB_COMPLAINT_PRODUCT.COP_CBO_CMO AS cbocmo
FROM         dbo.TB_COMPLAINT INNER JOIN
                      dbo.TB_COMPLAINT_PRODUCT ON dbo.TB_COMPLAINT_PRODUCT.COP_COMPLAINT_FK = dbo.TB_COMPLAINT.COM_ID
GROUP BY dbo.TB_COMPLAINT.COM_ID, dbo.TB_COMPLAINT_PRODUCT.COP_CBO_CMO
GO
/****** Object:  View [dbo].[_duplicates_2015_06_06]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [dbo].[_duplicates_2015_06_06] as
SELECT distinct [COS_COMPLAINT_FK] com
      ,[COS_STATE_FK] stat
  FROM [2014_servisni_web_com].[dbo].[TB_COMPLAINT_STATE]
   group by  [COS_COMPLAINT_FK], [COS_STATE_FK]
   --,
  --[COS_PERSON_FK]      --,[COS_VALID]
 having count (*) > 1
GO
/****** Object:  View [dbo].[_oldcodenewcode]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [dbo].[_oldcodenewcode] as 
select oldcode, old.def_id as old_id, newcode, new.def_id as new_id
from _oldcode left outer join tb_defect old on (oldcode=old.def_code and old.def_new=0)
left outer join tb_defect new on (newcode=new.def_code and new.def_new=1)
GO
/****** Object:  View [dbo].[_pro_bar_dist]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [dbo].[_pro_bar_dist] as 
select distinct cop_product_fk, substring(COM_F2_LOCAL_IDENT,4,3) as bar
FROM TB_PRODUCT inner join tb_complaint_product on (cop_product_fk=pro_id) inner join tb_complaint on (cop_complaint_fk=com_id)
where pro_group1=133 group by cop_product_fk, substring(COM_F2_LOCAL_IDENT,4,3)
GO
/****** Object:  View [dbo].[_pro_ent_bar]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [dbo].[_pro_ent_bar] as 
select cop_product_fk, cop_cbo_cmo, substring(COM_F2_LOCAL_IDENT,4,3) as bar
FROM TB_PRODUCT inner join tb_complaint_product on (cop_product_fk=pro_id) inner join tb_complaint on (cop_complaint_fk=com_id)
where pro_group1=133
GO
/****** Object:  View [dbo].[_pro_ent_bar_dist]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [dbo].[_pro_ent_bar_dist] as 
select distinct cop_product_fk, cop_cbo_cmo, substring(COM_F2_LOCAL_IDENT,4,3) as bar
FROM TB_PRODUCT inner join tb_complaint_product on (cop_product_fk=pro_id) inner join tb_complaint on (cop_complaint_fk=com_id)
where pro_group1=133 group by cop_product_fk, cop_cbo_cmo, substring(COM_F2_LOCAL_IDENT,4,3)
GO
/****** Object:  View [dbo].[_prod_defects]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [dbo].[_prod_defects] as 
select cpd_complaint_product_fk,count(*) as cnt from TB_COMPLAINT_PRODUCT_DEFECT
group by cpd_complaint_product_fk
GO
/****** Object:  View [dbo].[_SPRAVUJEMEpOLSKEVADY]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[_SPRAVUJEMEpOLSKEVADY] AS 
select cpd_complaint_product_fk AS CPFK,MAX(CPD_ID) CPiD ,COUNT(*) AS CNT from tb_complaint_product_defect where cpd_main = 1 group by cpd_complaint_product_fk having count(*)>1
GO
/****** Object:  View [dbo].[_stat_2011_09_22_defProblem]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [dbo].[_stat_2011_09_22_defProblem] as 
select distinct cop_complaint_fk from tb_complaint_product where exists (
select CPD_COMPLAINT_PRODUCT_FK, count(*) from tb_complaint_product_defect where CPD_COMPLAINT_PRODUCT_FK=cop_id and cpd_main=1 group by CPD_COMPLAINT_PRODUCT_FK having count(*)>1
)
GO
/****** Object:  View [dbo].[_tmpv_dupProductAll]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [dbo].[_tmpv_dupProductAll] as
select proCode,cnt,minId,maxid,pro_name as proName, pro_name_en as pronameen,pro_group1 as proprgroup1, PRO_GROUP1_S as progroup1s
from _tmp_dupProductAll inner join tb_product on maxid=pro_Id
GO
/****** Object:  View [dbo].[_tmpv_dupProductAll2]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [dbo].[_tmpv_dupProductAll2] as 
select pro_id as proId,minId from _tmp_dupProductAll inner join tb_product on (pro_Code=proCode) where pro_id<>minId
GO
/****** Object:  View [dbo].[_v_dk_cim]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [dbo].[_v_dk_cim] as 
 select [Old CIM Number 1] as cim ,MIN ([AX code]) as ax, COUNT(*) as cnt from _dk_import_acessories group by [Old CIM Number 1] having COUNT(*)>1
 
GO
/****** Object:  View [dbo].[_v_dk_spotreba]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [dbo].[_v_dk_spotreba] as 
Select sum(isnull(convert(decimal(18,2),cop_count)/pro_consum,0)) as dodane, sum(isnull(convert(decimal(18,2),cop_bad_count)/pro_consum,0)) as vadne,COP_COMPLAINT_FK 
from tb_complaint_product inner join tb_product on (cop_product_fk=pro_id) 
where pro_consum<>0 and COP_COMPLAINT_FK in (select com_id from TB_COMPLAINT where com_exdk is not null)
group by COP_COMPLAINT_FK
GO
/****** Object:  View [dbo].[_vdefvko_unikatnicomivady]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create  view [dbo].[_vdefvko_unikatnicomivady] as 
select comid,def,count(*) as cnt from _defk20 where comid in (select comId from _defk20)
group by comid,def
having count(*)>1
GO
/****** Object:  View [dbo].[_XXXA]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [dbo].[_XXXA] as 
select CPD_COMPLAINT_PRODUCT_FK, count(*) as cnt,max(cpd_id) as cpdId from tb_complaint_product_defect where cpd_main =1 group by CPD_COMPLAINT_PRODUCT_FK having count(*)>1
GO
/****** Object:  View [dbo].[stat_1]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE view [dbo].[stat_1] as  
--------------------------------------------------------------------------------------
-- AKTUALNI STAVY REKLAMACI
--------------------------------------------------------------------------------------
Select 
--Kod reklace se sklada ze sloupcu com_bfm, kodu zeme, poradoveho cisla reklamace a roku prijeti
c.com_bfm+country.itm_code+right('000'+convert(varchar(3),c.com_number),3)+right('00'+year(c.com_date_enter),2) as comCode,
--nazev stavu bereme z ciselniku tb_item
state.itm_name as state_name,state.itm_id as state_id,
--nazev zeme bereme z ciselniku tb_item 
country.itm_id  as country_id,country.itm_code  as country_code,country.itm_name as country_name,
--vyrobni zavod
c.com_bfm,
--opakovana reklamace se pozna dle toho ze mame s pozdejsim date mstejne misto stavby (vracim pocet naslednych reklamaci)
(select count(*) from tb_complaint repeated where repeated.com_id<>c.com_id and repeated.com_construction_fk=c.com_construction_fk and repeated.com_date_enter>=c.com_date_enter) as repeated,
--oznaceni pro rozsirenou reklamaci 
(select count(*) from tb_complaint rr where rr.com_extend=c.com_id) as rr

from 
--tabule s reklamacemi
tb_complaint c
-- zde si najdu nazev zeme z ciselniku 
inner join tb_item as country on (country.itm_id=c.com_country_fk and country.itm_type_fk=3 and country.itm_language_fk=1) 
--zde si pripojim aktualni stav z historickych stavu
inner join tb_complaint_state on (c.com_id=cos_complaint_fk and cos_valid=1) 
-- a naleznu si nazev aktualniho stavu
inner join tb_item  as state on (state.itm_id=cos_state_fk and state.itm_type_fk=2  and state.itm_language_fk=1) 
-- neberu v uvahu smazane reklamace
where com_deleted=0






GO
/****** Object:  View [dbo].[stat_2]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE view [dbo].[stat_2] as  
--------------------------------------------------------------------------------------
-- PRIJATE REKLAMACE
--------------------------------------------------------------------------------------
Select 
--Kod reklace se sklada ze sloupcu com_bfm, kodu zeme, poradoveho cisla reklamace a roku prijeti
c.com_bfm+country.itm_code+right('000'+convert(varchar(3),c.com_number),3)+right('00'+year(c.com_date_enter),2) as comCode,
--nazev stavu bereme z ciselniku tb_item
state.itm_name as state_name,state.itm_id as state_id,
--nazev zeme bereme z ciselniku tb_item 
country.itm_id  as country_id,country.itm_code  as country_code,country.itm_name as country_name,
--vyrobni zavod
c.com_bfm,
--opakovana reklamace se pozna dle toho ze mame s pozdejsim date mstejne misto stavby (vracim pocet naslednych reklamaci)
(select count(*) from tb_complaint repeated where repeated.com_id<>c.com_id and repeated.com_construction_fk=c.com_construction_fk and repeated.com_date_enter>=c.com_date_enter) as repeated,
--oznaceni pro rozsirenou reklamaci 
(select count(*) from tb_complaint rr where rr.com_extend=c.com_id) as rr,
--a nakoenc si vyberu datum prijeti
com_date_enter

from 
--tabule s reklamacemi
tb_complaint c
-- zde si najdu nazev zeme z ciselniku 
inner join tb_item as country on (country.itm_id=c.com_country_fk and country.itm_type_fk=3 and country.itm_language_fk=1) 
--zde si pripojim aktualni stav z historickych stavu
inner join tb_complaint_state on (c.com_id=cos_complaint_fk and cos_valid=1) 
-- a naleznu si nazev aktualniho stavu
inner join tb_item  as state on (state.itm_id=cos_state_fk and state.itm_type_fk=2  and state.itm_language_fk=1) 
where 
-- neberu v uvahu smazane reklamace
com_deleted=0






GO
/****** Object:  View [dbo].[stat_4]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE view  [dbo].[stat_4] as  
--------------------------------------------------------------------------------------
-- POCTY A HMOTNOSTI REKLAMOVANEHO ZBOZI
-- v seznamu se muzu kazda reklamace vyslytnout vicekrat, 
-- dle toho kolik produktu se do jedne reklamace vztahuje
-- jestlize chceme souhrny da se na vse pouzit group by a count resp. sum
--------------------------------------------------------------------------------------
Select 
--Kod reklace se sklada ze sloupcu com_bfm, kodu zeme, poradoveho cisla reklamace a roku prijeti
c.com_bfm+country.itm_code+right('000'+convert(varchar(3),c.com_number),3)+right('00'+year(c.com_date_enter),2) as comCode,
--stav bereme z ciselniku tb_item 
state.itm_name as state_name,state.itm_id as state_id,
--nazev zeme bereme z ciselniku tb_item 
country.itm_id  as country_id,country.itm_code  as country_code,country.itm_name as country_name,
--vyrobni zavod
c.com_bfm,
--opakovana reklamace se pozna dle toho ze mame s pozdejsim date mstejne misto stavby (vracim pocet naslednych reklamaci)
(select count(*) from tb_complaint repeated where repeated.com_id<>c.com_id and repeated.com_construction_fk=c.com_construction_fk and repeated.com_date_enter>=c.com_date_enter) as repeated,
--oznaceni pro rozsirenou reklamaci 
(select count(*) from tb_complaint rr where rr.com_extend=c.com_id) as rr,

--vyberu si kod a nazev produktu, reklamovany pocet a hmotnost reklamovanych produktu
pro_code,pro_name,cop_bad_count,cop_bad_count*pro_weight_unit as weight

from 
--tabule s reklamacemi
tb_complaint c
-- zde si najdu nazev zeme z ciselniku 
inner join tb_item as country on (country.itm_id=c.com_country_fk and country.itm_type_fk=3 and country.itm_language_fk=1) 
--zde si pripojim stav z historickych stavu kdy doslo ke schvaleni reklamace 
inner join tb_complaint_state schvalen on (c.com_id=schvalen.cos_complaint_fk and schvalen.cos_state_fk=14) 
-- a zde si pripojim aktualni stav reklamace
inner join tb_complaint_state cs on (c.com_id=cs.cos_complaint_fk and cs.cos_valid=1) 
-- a naleznu si nazev aktualniho stavu
inner join tb_item  as state on (state.itm_id=cs.cos_state_fk and state.itm_type_fk=2  and state.itm_language_fk=1) 
-- napojim si tabulku s reklamacemi jednotlivych produktu
inner join tb_complaint_product on (c.com_id=cop_complaint_fk)
-- a nakonec si naleznu konkretni udaje pro produkty
inner join tb_product on (cop_product_fk=pro_id)
where 
-- neberu v uvahu smazane reklamace
com_deleted=0






GO
/****** Object:  View [dbo].[stat_5a]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE view [dbo].[stat_5a] as  
--------------------------------------------------------------------------------------
-- UDAJE O DOKLADECH Z EXPEDICE
-- v seznamu se muzu kazda reklamace vyslytnout vicekrat, 
-- dle toho kolik dokladu se do jedne reklamace vztahuje
-- jestlize chceme souhrny da se na vse pouzit group by a count resp. sum
--------------------------------------------------------------------------------------
Select 
--Kod reklace se sklada ze sloupcu com_bfm, kodu zeme, poradoveho cisla reklamace a roku prijeti
c.com_bfm+country.itm_code+right('000'+convert(varchar(3),c.com_number),3)+right('00'+year(c.com_date_enter),2) as comCode,
--nazev zeme bereme z ciselniku tb_item 
country.itm_id  as country_id,country.itm_code  as country_code,country.itm_name as country_name,
--vyrobni zavod
c.com_bfm,
--opakovana reklamace se pozna dle toho ze mame s pozdejsim date mstejne misto stavby (vracim pocet naslednych reklamaci)
(select count(*) from tb_complaint repeated where repeated.com_id<>c.com_id and repeated.com_construction_fk=c.com_construction_fk and repeated.com_date_enter>=c.com_date_enter) as repeated,
--oznaceni pro rozsirenou reklamaci 
(select count(*) from tb_complaint rr where rr.com_extend=c.com_id) as rr,
--vyberu si datum prijeti
com_date_enter,
--vyberu si udaje o jednotlivych dokladech
cet_name,cer_text,cer_date,cer_code,cer_name1,cer_name2,cer_quant

from 
--tabule s reklamacemi
tb_complaint c
-- zde si najdu nazev zeme z ciselniku 
inner join tb_item as country on (country.itm_id=c.com_country_fk and country.itm_type_fk=3 and country.itm_language_fk=1) 

-- napojim si tabulku s udaji o dokladech z expedice
inner join tb_complaint_expedicion_real on (c.com_id=cer_complaint_fk)
-- a nakonec si naleznu jednotlive typy dokladu
inner join tb_complaint_expedicion_type on (cer_type_fk=cet_id)
where 
-- neberu v uvahu smazane reklamace
com_deleted=0









GO
/****** Object:  View [dbo].[stat_5b]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE view [dbo].[stat_5b] as --------------------------------------------------------------------------------------
-- UDAJE O SKUTECNYHC NAKLADECH Z UCTA
-- v seznamu se muzu kazda reklamace vyskytnout vicekrat, 
-- dle toho kolik dokladu se do jedne reklamace vztahuje
-- jestlize chceme souhrny da se na vse pouzit group by a count resp. sum
--------------------------------------------------------------------------------------
Select 
--Kod reklace se sklada ze sloupcu com_bfm, kodu zeme, poradoveho cisla reklamace a roku prijeti
c.com_bfm+country.itm_code+right('000'+convert(varchar(3),c.com_number),3)+right('00'+year(c.com_date_enter),2) as comCode,
--nazev zeme bereme z ciselniku tb_item 
country.itm_id  as country_id,country.itm_code  as country_code,country.itm_name as country_name,
--vyrobni zavod
c.com_bfm,
--opakovana reklamace se pozna dle toho ze mame s pozdejsim date mstejne misto stavby (vracim pocet naslednych reklamaci)
(select count(*) from tb_complaint repeated where repeated.com_id<>c.com_id and repeated.com_construction_fk=c.com_construction_fk and repeated.com_date_enter>=c.com_date_enter) as repeated,
--oznaceni pro rozsirenou reklamaci 
(select count(*) from tb_complaint rr where rr.com_extend=c.com_id) as rr,
--vyberu si datum prijeti
com_date_enter,
--vyberu si udaje o jednotlivych dokladech
cct_name_cz,ccr_text,ccr_price

from 
--tabule s reklamacemi
tb_complaint c
-- zde si najdu nazev zeme z ciselniku 
inner join tb_item as country on (country.itm_id=c.com_country_fk and country.itm_type_fk=3 and country.itm_language_fk=1) 

-- napojim si tabulku s udaji o skutecnych naklade3ch z ucta
inner join tb_complaint_calculation_real on (c.com_id=ccr_complaint_fk)
-- a nakonec si naleznu jednotlive typy dokladu
inner join tb_complaint_calculation_type on (ccr_type_fk=cct_id)
where 
-- neberu v uvahu smazane reklamace
com_deleted=0






GO
/****** Object:  View [dbo].[TB_REALIZ]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[TB_REALIZ]
AS
SELECT     ADR_CRDATE AS REA_CRDATE, ADR_MODDATE AS REA_MODDATE, ADR_CRUSER AS REA_CRUSER, ADR_MODUSER AS REA_MODUSER, 
                      ADR_ID AS REA_id, ADR_NAME AS REA_NAME, ADR_STREET AS REA_STREET, ADR_CITY AS REA_CITY, ADR_ZIP AS REA_ZIP, 
                      ADR_COUNTRY_FK AS REA_COUNTRY_FK, ADR_ICO AS REA_ICO, ADR_DIC AS REA_DIC, ADR_PERSON AS REA_PERSON, 
                      ADR_EMAIL AS REA_EMAIL, ADR_PHONE AS REA_PHONE, ADR_FAX AS REA_FAX, ADR_ROOF AS REA_ROOF, ADR_IMPORTTYPE, 
                      ADR_AUTHORIZED AS REA_AUTHORIZED, ADR_REGION_FK
FROM         dbo.TB_ADDRESS_NEW
WHERE     (ADR_IMPORTTYPE = 3)
GO
/****** Object:  View [dbo].[V_COMPLAINT_DELETED]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[V_COMPLAINT_DELETED]
AS
SELECT     dbo.TB_COMPLAINT.COM_CRDATE, dbo.TB_COMPLAINT.COM_MODDATE, dbo.TB_COMPLAINT.COM_CRUSER, dbo.TB_COMPLAINT.COM_MODUSER, dbo.TB_COMPLAINT.COM_ID, 
                      dbo.TB_COMPLAINT.COM_NUMBER, dbo.TB_COMPLAINT.COM_BFM, dbo.TB_COMPLAINT.COM_COUNTRY_FK, dbo.TB_COMPLAINT.COM_DATE_ENTER, dbo.TB_COMPLAINT.COM_DISTRIB_FK, 
                      dbo.TB_COMPLAINT.COM_CUSTOMER_FK, dbo.TB_COMPLAINT.COM_CONSTRUCTION_FK, dbo.TB_COMPLAINT.COM_DATE_DELIVERED, dbo.TB_COMPLAINT.COM_TECH_FK, 
                      dbo.TB_COMPLAINT.COM_MAN_FK, dbo.TB_COMPLAINT.COM_INVOICE, dbo.TB_COMPLAINT.COM_REPEAT, dbo.TB_COMPLAINT.COM_EXTEND, dbo.TB_COMPLAINT.COM_TYPE_FK, 
                      dbo.TB_COMPLAINT.COM_NOTICE, dbo.TB_COMPLAINT.COM_F2_LOCAL_PERS, dbo.TB_COMPLAINT.COM_F2_LOCAL_DATE, dbo.TB_COMPLAINT.COM_F2_STOCK, 
                      dbo.TB_COMPLAINT.COM_F2_STOCK_BAD, dbo.TB_COMPLAINT.COM_F2_LOCAL_NOTICE, dbo.TB_COMPLAINT.COM_F2_OBJECT_TYPE, dbo.TB_COMPLAINT.COM_F2_REALIZ_FK, 
                      dbo.TB_COMPLAINT.COM_F2_REALIZ_AUTOR, dbo.TB_COMPLAINT.COM_F2_REALIZ_DATE, dbo.TB_COMPLAINT.COM_F2_CALAMITY, dbo.TB_COMPLAINT.COM_F2_CALAMITY_DATE, 
                      dbo.TB_COMPLAINT.COM_F3_CALAMITY_TYPE, dbo.TB_COMPLAINT.COM_F2_ROOF, dbo.TB_COMPLAINT.COM_F2_VENTIALTION_FK, dbo.TB_COMPLAINT.COM_F2_VENTILATION_OTHER, 
                      dbo.TB_COMPLAINT.COM_F2_DEFECTS, dbo.TB_COMPLAINT.COM_F2_VENTILATION_ITEM, dbo.TB_COMPLAINT.COM_F2_VENTILATION_YES, dbo.TB_COMPLAINT.COM_F2_FOLIE, 
                      dbo.TB_COMPLAINT.COM_F2_FOLIE_FK, dbo.TB_COMPLAINT.COM_F3_FOLIE_TYPE, dbo.TB_COMPLAINT.COM_F2_SLOPE, dbo.TB_COMPLAINT.COM_F2_SLOPE_AREA, 
                      dbo.TB_COMPLAINT.COM_F2_ROOFT_FK, dbo.TB_COMPLAINT.COM_F2_ROOFT_OTHER, dbo.TB_COMPLAINT.COM_F2_ORIENT, dbo.TB_COMPLAINT.COM_F2_HEIGHT, 
                      dbo.TB_COMPLAINT.COM_F2_TAKE_FK, dbo.TB_COMPLAINT.COM_F2_INSERT_FK, dbo.TB_COMPLAINT.COM_F2_MATERIAL_FK, dbo.TB_COMPLAINT.COM_F2_MATERIAL_OTHER, 
                      dbo.TB_COMPLAINT.COM_F2_AVERAGE, dbo.TB_COMPLAINT.COM_F2_PAD, dbo.TB_COMPLAINT.COM_F2_COVER, dbo.TB_COMPLAINT.COM_F2_SNOW1, dbo.TB_COMPLAINT.COM_F2_SNOW2, 
                      dbo.TB_COMPLAINT.COM_F2_GUTTER_FK, dbo.TB_COMPLAINT.COM_F2_GUTTER_OTHER, dbo.TB_COMPLAINT.COM_F2_OTHER_DESC, dbo.TB_COMPLAINT.COM_F2_CUSTOMER_DATE, 
                      dbo.TB_COMPLAINT.COM_F2_CUSTOMER_DESC, dbo.TB_COMPLAINT.COM_F2_SPECIALIST_DATE, dbo.TB_COMPLAINT.COM_F2_SPECIALIST_DESC, 
                      dbo.TB_COMPLAINT.COM_F2_SPECIALIST_YES, dbo.TB_COMPLAINT.COM_F2_SOLUTION_PERSON, dbo.TB_COMPLAINT.COM_F2_SOLUTION_DATE, 
                      dbo.TB_COMPLAINT.COM_F2_SOLUTION_DESC, dbo.TB_COMPLAINT.COM_F2_COMB, dbo.TB_COMPLAINT.COM_F2_LOAD_DATE, dbo.TB_COMPLAINT.COM_F3_PERSON_DONE, 
                      dbo.TB_COMPLAINT.COM_F3_DATE_DONE, dbo.TB_COMPLAINT.COM_F3_PERSON_PASS, dbo.TB_COMPLAINT.COM_F3_PERSON_PASSa, dbo.TB_COMPLAINT.COM_F3_DATE_PASS, 
                      dbo.TB_COMPLAINT.COM_F3_DATE_PASSa, dbo.TB_COMPLAINT.COM_F3_DESC, dbo.TB_COMPLAINT.COM_F3_DESCa, dbo.TB_COMPLAINT.COM_F3_SECONDSTEP, 
                      dbo.TB_COMPLAINT.COM_F3_NUMBER, dbo.TB_COMPLAINT.COM_F3_NUMBER_TYPE, dbo.TB_COMPLAINT.COM_F3_NUMBER_TYPE_FK, dbo.TB_COMPLAINT.COM_F3B_DATE, 
                      dbo.TB_COMPLAINT.COM_F3B_PERSON, dbo.TB_COMPLAINT.COM_F4_DATE, dbo.TB_COMPLAINT.COM_F4_PERSON, dbo.TB_COMPLAINT.COM_F5_CAUSE, 
                      dbo.TB_COMPLAINT.COM_F5_PROVIDE, dbo.TB_COMPLAINT.COM_F6_WARE, dbo.TB_COMPLAINT.COM_F6_WARE_DATE, dbo.TB_COMPLAINT.COM_F6_GWR, 
                      dbo.TB_COMPLAINT.COM_F6_GWR_DATE, dbo.TB_COMPLAINT.COM_F6_COMP, dbo.TB_COMPLAINT.COM_F6_COMP_DATE, dbo.TB_COMPLAINT.COM_F6_OTHER, 
                      dbo.TB_COMPLAINT.COM_F6_OTHER_DATE, dbo.TB_COMPLAINT.COM_F6_CLOSE_DATE, dbo.TB_COMPLAINT.COM_F2_LOCAL_IDENT, dbo.TB_COMPLAINT.COM_F3B_COMMENT, 
                      dbo.TB_COMPLAINT.COM_DELETED, dbo.TB_COMPLAINT.COM_LASTIMPORT, dbo.TB_COMPLAINT.COM_F2_PERCENT_OBCH, dbo.TB_COMPLAINT.COM_F2_PERCENT_PRAV, 
                      dbo.TB_COMPLAINT.COM_F2_LATH, dbo.TB_COMPLAINT.COM_F2_EXCEEDING, dbo.TB_COMPLAINT.COM_F6_NOTE, dbo.TB_COMPLAINT.COM_PERSON_COM, 
                      dbo.TB_COMPLAINT.COM_PERSON_EXPED, dbo.TB_COMPLAINT.COM_F3_HISTORY, dbo.TB_COMPLAINT.COM_F1_ORIG_ID, dbo.TB_COMPLAINT.COM_F1_GROUP1_FK, 
                      dbo.TB_COMPLAINT.COM_F2_PLOCHA_DODANE, dbo.TB_COMPLAINT.COM_F2_PLOCHA_REKLAMOVANE, dbo.TB_COMPLAINT.COM_F1_ZAKAZ, dbo.TB_COMPLAINT.COM_F1_DOC, 
                      dbo.TB_COMPLAINT.COM_NOTE, dbo.TB_COMPLAINT.COM_URGENT, dbo.TB_COMPLAINT.COM_NEW, dbo.TB_COMPLAINT.COM_F2_ROOF_FK, dbo.TB_COMPLAINT.COM_F2_SISTER, 
                      dbo.TB_COMPLAINT.COM_F5_SISTERDATE, dbo.TB_COMPLAINT.COM_F2_SISTERDATE, dbo.TB_COMPLAINT.COM_F3B_BACK, dbo.TB_COMPLAINT.COM_CHANGED, 
                      dbo.TB_COMPLAINT.COM_CHANGEDESCRIPTION, dbo.TB_COMPLAINT.COM_F2_EXTERIOR_TYPE, dbo.TB_COMPLAINT.COM_F2_EXTERIOR_OTHER, dbo.TB_COMPLAINT.COM_F2_GRID, 
                      dbo.TB_COMPLAINT.COM_F2_GRID_OTHER, dbo.TB_COMPLAINT.COM_F2_SPARA_HORIZONT, dbo.TB_COMPLAINT.COM_F2_SPARA_VERTIKAL, dbo.TB_COMPLAINT.COM_F2_INTERSPACE, 
                      dbo.TB_COMPLAINT.COM_F2_ISOLATION, dbo.TB_COMPLAINT.COM_F2_WORK, dbo.TB_COMPLAINT.COM_F2_WORK_DEFECT, dbo.TB_COMPLAINT.COM_F2_MATERIAL_SLIDING, 
                      dbo.TB_COMPLAINT.COM_F2_MATERIAL_FIXED, dbo.TB_COMPLAINT.COM_F2_ORIENT_EXTERIOR, dbo.TB_COMPLAINT.COM_F2_ELEVATION_EXTERIOR, dbo.TB_COMPLAINT.COM_F1_FR_STOP, 
                      dbo.TB_COMPLAINT.COM_F1_E, country.ITM_ID AS country_id, country.ITM_CODE AS country_code, country.ITM_NAME AS country_name, dbo.TB_USER.USR_NAME, dbo.TB_USER.USR_ID, 
                      country.ITM_LANGUAGE_FK AS country_language_fk, 1 AS state_language_fk, dbo.TB_COMPLAINT_STATE.COS_PERSON_FK, state.URN_STATENAME AS state_name, state.URN_ID AS state_id, 
                      dbo.TB_COMPLAINT.COM_F1_CBO_CMO, dbo.TB_COMPLAINT.COM_F1_INSURANCE, dbo.TB_COMPLAINT.COM_F1_FLS, dbo.TB_COMPLAINT.COM_QM_FK
FROM         dbo.TB_COMPLAINT INNER JOIN
                      dbo.TB_ITEM AS country ON country.ITM_ID = dbo.TB_COMPLAINT.COM_COUNTRY_FK AND country.ITM_TYPE_FK = 3 INNER JOIN
                      dbo.TB_COMPLAINT_STATE ON dbo.TB_COMPLAINT.COM_ID = dbo.TB_COMPLAINT_STATE.COS_COMPLAINT_FK AND dbo.TB_COMPLAINT_STATE.COS_VALID = 1 INNER JOIN
                      dbo.TB_USER ON dbo.TB_COMPLAINT_STATE.COS_PERSON_FK = dbo.TB_USER.USR_ID INNER JOIN
                      dbo.TB_USER_ROLENEW AS state ON state.URN_ID = dbo.TB_COMPLAINT_STATE.COS_STATE_FK
GO
/****** Object:  View [dbo].[v_import_price_duplicity]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE view [dbo].[v_import_price_duplicity] as 
select  pim,[TO],[FROM], MIN(id) as id from _IMPORT_PRICELIST group by pim,[TO],[FROM]  having COUNT(*)>1
GO
/****** Object:  View [dbo].[v_import_price_poctyFrom]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE view [dbo].[v_import_price_poctyFrom] as 
select pim, [from], COUNT(*) as cnt  from _IMPORT_PRICELIST group by pim, [from]
GO
/****** Object:  View [dbo].[V_SALES]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
/****** Script for SelectTopNRows command from SSMS  ******/
create view [dbo].[V_SALES] as
SELECT *
  FROM [2014_servisni_web_com].[dbo].[TB_SALES_OLD]
GO
/****** Object:  View [dbo].[v_stat_basic_xx]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [dbo].[v_stat_basic_xx]
as
SELECT     c.COM_ID AS comID, c.COM_DATE_ENTER AS comDateEnter, c.COM_CUSTOMER_FK AS comCustomerFk, 
                      c.COM_F2_LOCAL_DATE AS comF2LocalDate, c.COM_CONSTRUCTION_FK AS comConstructionFk, c.COM_F2_PERCENT_OBCH AS comF2PercentObch, 
                      c.COM_F2_PERCENT_PRAV AS comF2PercentPrav, CASE year(com_date_enter) 
                      WHEN 2004 THEN c.com_bfm + country.itm_code + RIGHT('000' + CONVERT(varchar(3), c.com_number), 3) + RIGHT('00' + year(c.com_date_enter), 2) 
                      WHEN 2003 THEN c.com_bfm + country.itm_code + RIGHT('000' + CONVERT(varchar(3), c.com_number), 3) + RIGHT('00' + year(c.com_date_enter), 2) 
                      WHEN 2002 THEN c.com_bfm + country.itm_code + RIGHT('000' + CONVERT(varchar(3), c.com_number), 3) + RIGHT('00' + year(c.com_date_enter), 2) 
                      WHEN 2001 THEN c.com_bfm + country.itm_code + RIGHT('000' + CONVERT(varchar(3), c.com_number), 3) + RIGHT('00' + year(c.com_date_enter), 2) 
                      WHEN 2000 THEN c.com_bfm + country.itm_code + RIGHT('000' + CONVERT(varchar(3), c.com_number), 3) + RIGHT('00' + year(c.com_date_enter), 2) 
                      WHEN 1999 THEN c.com_bfm + country.itm_code + RIGHT('000' + CONVERT(varchar(3), c.com_number), 3) + RIGHT('00' + year(c.com_date_enter), 2) 
                      WHEN 1998 THEN c.com_bfm + country.itm_code + RIGHT('000' + CONVERT(varchar(3), c.com_number), 3) + RIGHT('00' + year(c.com_date_enter), 2) 
                      ELSE country.itm_code + RIGHT('0000' + CONVERT(varchar(4), c.com_number), 4) + RIGHT('00' + year(c.com_date_enter), 2) END AS comCode, 
                      state.ITM_NAME AS state_name, state.ITM_ID AS state_id, country.ITM_ID AS country_id, country.ITM_CODE AS country_code, 
                      country.ITM_NAME AS country_name, c.COM_BFM,
                          (SELECT     COUNT(*) AS Expr1
                            FROM          dbo.TB_COMPLAINT AS repeated
                            WHERE      (COM_ID <> c.COM_ID) AND (COM_CONSTRUCTION_FK = c.COM_CONSTRUCTION_FK) AND 
                                                   (COM_DATE_ENTER >= c.COM_DATE_ENTER)) AS repeated,
                          (SELECT     COUNT(*) AS Expr1
                            FROM          dbo.TB_COMPLAINT AS rr
                            WHERE      (COM_EXTEND = c.COM_ID)) AS rr, c.COM_F2_PLOCHA_REKLAMOVANE
FROM         dbo.TB_COMPLAINT AS c INNER JOIN
                      dbo.TB_ITEM AS country ON country.ITM_ID = c.COM_COUNTRY_FK AND country.ITM_TYPE_FK = 3 AND country.ITM_LANGUAGE_FK = 1 INNER JOIN
                      dbo.TB_COMPLAINT_STATE ON c.COM_ID = dbo.TB_COMPLAINT_STATE.COS_COMPLAINT_FK AND 
                      dbo.TB_COMPLAINT_STATE.COS_VALID = 1 INNER JOIN
                      dbo.TB_ITEM AS state ON state.ITM_ID = dbo.TB_COMPLAINT_STATE.COS_STATE_FK AND state.ITM_TYPE_FK = 2 AND 
                      state.ITM_LANGUAGE_FK = 1
WHERE     (c.COM_DELETED = 0) AND (c.COM_COUNTRY_FK= 215)
GO
/****** Object:  View [dbo].[V_STAT_CALCULATION_RT]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[V_STAT_CALCULATION_RT]
AS
SELECT     CCR_COMPLAINT_FK AS ccaComplaintFk, ISNULL(SUM(CCR_PRICE_EURO), 0) AS ccaPrice, CCR_TYPE_FK AS ccaTypeFk
FROM         dbo.TB_COMPLAINT_CALCULATION_REAL
GROUP BY CCR_COMPLAINT_FK, CCR_TYPE_FK
GO
/****** Object:  View [dbo].[V_STAT_CALCULATION_WT]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[V_STAT_CALCULATION_WT]
AS
SELECT     CCA_COMPLAINT_FK AS ccaComplaintFk, ISNULL(SUM(CCA_PRICE_EURO), 0) AS ccaPrice, CCA_TYPE_FK AS ccaTypeFk
FROM         dbo.TB_COMPLAINT_CALCULATION
GROUP BY CCA_COMPLAINT_FK, CCA_TYPE_FK
GO
/****** Object:  View [dbo].[V_STAT_CODE]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE view [dbo].[V_STAT_CODE] as 
SELECT     c.COM_ID AS comID, c.COM_DATE_ENTER AS comDateEnter, c.COM_CUSTOMER_FK AS comCustomerFk, 
                      c.COM_F2_LOCAL_DATE AS comF2LocalDate, c.COM_CONSTRUCTION_FK AS comConstructionFk, c.COM_F2_PERCENT_OBCH AS comF2PercentObch, 
                      c.COM_F2_PERCENT_PRAV AS comF2PercentPrav, CASE year(com_date_enter) 
                      WHEN 2004 THEN country.itm_code + RIGHT('0000' + CONVERT(varchar(4), c.com_number), 4) + 'X'+RIGHT('00' + year(c.com_date_enter), 1) 
                      WHEN 2003 THEN country.itm_code + RIGHT('0000' + CONVERT(varchar(4), c.com_number), 4) + 'X'+RIGHT('00' + year(c.com_date_enter), 1) 
                      WHEN 2002 THEN country.itm_code+ RIGHT('0000' + CONVERT(varchar(4), c.com_number), 4) + 'X'+RIGHT('00' + year(c.com_date_enter), 1) 
                      WHEN 2001 THEN country.itm_code + RIGHT('0000' + CONVERT(varchar(4), c.com_number), 4) +'X'+ RIGHT('00' + year(c.com_date_enter), 1) 
                      WHEN 2000 THEN country.itm_code + RIGHT('0000' + CONVERT(varchar(4), c.com_number), 4) + 'X'+RIGHT('00' + year(c.com_date_enter), 1) 
                      WHEN 1999 THEN country.itm_code + RIGHT('0000' + CONVERT(varchar(4), c.com_number), 4) + 'X'+RIGHT('00' + year(c.com_date_enter), 1) 
                      WHEN 1998 THEN country.itm_code + RIGHT('0000' + CONVERT(varchar(4), c.com_number), 4) + 'X'+RIGHT('00' + year(c.com_date_enter), 1) 
                      WHEN 1997 THEN  country.itm_code + RIGHT('00000' + CONVERT(varchar(5), c.com_number), 5) + 'X' 
                      ELSE country.itm_code + RIGHT('0000' + CONVERT(varchar(4), c.com_number), 4) + RIGHT('00' + year(c.com_date_enter), 2) END AS comCode, 
                       country.ITM_ID AS country_id, country.ITM_CODE AS country_code, 
                      country.ITM_NAME AS country_name, c.COM_BFM,
                          (SELECT     COUNT(*) AS Expr1
                            FROM          dbo.TB_COMPLAINT AS repeated
                            WHERE      (COM_ID <> c.COM_ID) AND (COM_CONSTRUCTION_FK = c.COM_CONSTRUCTION_FK) AND 
                                                   (COM_DATE_ENTER >= c.COM_DATE_ENTER)) AS repeated,
                          (SELECT     COUNT(*) AS Expr1
                            FROM          dbo.TB_COMPLAINT AS rr
                            WHERE      (COM_EXTEND = c.COM_ID)) AS rr, c.COM_F2_PLOCHA_REKLAMOVANE
FROM         dbo.TB_COMPLAINT AS c INNER JOIN
                      dbo.TB_ITEM AS country ON country.ITM_ID = c.COM_COUNTRY_FK AND country.ITM_TYPE_FK = 3 AND country.ITM_LANGUAGE_FK = 1 
WHERE     (c.COM_DELETED = 0) AND (c.COM_COUNTRY_FK <> 215) AND (c.COM_COUNTRY_FK <> 338)
and COM_CODE is null and com_exDk is not null


GO
/****** Object:  View [dbo].[V_STAT_EXPEDICION]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[V_STAT_EXPEDICION]
AS
SELECT    cer_complaint_fk as cerComplaintFk,sum(isnull(abs(cer_quant),0)) as cerQuant
FROM         dbo.TB_COMPLAINT_EXPEDICION_REAL
where cer_type_fk in (1,2)
group by cer_complaint_fk





GO
/****** Object:  View [dbo].[V_STAT_EXPEDICION_FULL]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[V_STAT_EXPEDICION_FULL]
AS
SELECT     CER_COMPLAINT_FK AS cerComplaintFk, SUM(ISNULL(ABS(CER_QUANT), 0)) AS cerQuant, cer_code as cerCode
FROM         dbo.TB_COMPLAINT_EXPEDICION_REAL
WHERE     (CER_TYPE_FK IN (1, 2))
GROUP BY CER_COMPLAINT_FK,cer_code



GO
/****** Object:  View [dbo].[vdk_impor_duplicitadleOrigId]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE view  [dbo].[vdk_impor_duplicitadleOrigId] as 
select com_f1_orig_id,COM_COUNTRY_FK, COUNT(*)  as cnt from TB_COMPLAINT where com_f1_orig_id<>'' and com_f1_orig_id is not null and com_country_fk = 33 and com_deleted =0
group by com_f1_orig_id,COM_COUNTRY_FK having COUNT(*)>1
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX__defk20]    Script Date: 21-05-2019 12:00:16 ******/
CREATE NONCLUSTERED INDEX [IX__defk20] ON [dbo].[_defk20]
(
	[comid] ASC,
	[def] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX__defk20_1]    Script Date: 21-05-2019 12:00:16 ******/
CREATE NONCLUSTERED INDEX [IX__defk20_1] ON [dbo].[_defk20]
(
	[def] ASC,
	[comid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX__produky_2018]    Script Date: 21-05-2019 12:00:16 ******/
CREATE NONCLUSTERED INDEX [IX__produky_2018] ON [dbo].[_produky_2018]
(
	[ItemID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [idx_comcode_notnull]    Script Date: 21-05-2019 12:00:16 ******/
CREATE UNIQUE NONCLUSTERED INDEX [idx_comcode_notnull] ON [dbo].[TB_COMPLAINT]
(
	[COM_CODE] ASC
)
WHERE ([COM_CODE] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [TB_COMPLAINT_DOCUMENT22]    Script Date: 21-05-2019 12:00:16 ******/
CREATE NONCLUSTERED INDEX [TB_COMPLAINT_DOCUMENT22] ON [dbo].[TB_COMPLAINT_DOCUMENT]
(
	[COD_COMPLAINT_FK] ASC,
	[COD_TYPE_FK] ASC,
	[COD_CRDATE] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 90) ON [PRIMARY]
GO
/****** Object:  Index [IX_TB_COMPLAINT_NOTE]    Script Date: 21-05-2019 12:00:16 ******/
CREATE NONCLUSTERED INDEX [IX_TB_COMPLAINT_NOTE] ON [dbo].[TB_COMPLAINT_NOTE]
(
	[CON_COMPLAINT_FK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_TB_COMPLAINT_PRODUCT]    Script Date: 21-05-2019 12:00:16 ******/
CREATE NONCLUSTERED INDEX [IX_TB_COMPLAINT_PRODUCT] ON [dbo].[TB_COMPLAINT_PRODUCT]
(
	[COP_DEFECT_FK] ASC,
	[COP_COMPLAINT_FK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_TB_COMPLAINT_PRODUCT_1]    Script Date: 21-05-2019 12:00:16 ******/
CREATE NONCLUSTERED INDEX [IX_TB_COMPLAINT_PRODUCT_1] ON [dbo].[TB_COMPLAINT_PRODUCT]
(
	[COP_PRODUCT_FK] ASC,
	[COP_COMPLAINT_FK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_TB_COMPLAINT_PRODUCT_2]    Script Date: 21-05-2019 12:00:16 ******/
CREATE NONCLUSTERED INDEX [IX_TB_COMPLAINT_PRODUCT_2] ON [dbo].[TB_COMPLAINT_PRODUCT]
(
	[COP_COMPLAINT_FK] ASC,
	[COP_MAIN] DESC,
	[COP_PRODUCT_FK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_TB_COMPLAINT_PRODUCT_DEFECT]    Script Date: 21-05-2019 12:00:16 ******/
CREATE NONCLUSTERED INDEX [IX_TB_COMPLAINT_PRODUCT_DEFECT] ON [dbo].[TB_COMPLAINT_PRODUCT_DEFECT]
(
	[CPD_DEFECT_FK] ASC,
	[CPD_COMPLAINT_PRODUCT_FK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_TB_COMPLAINT_PRODUCT_DEFECT_1]    Script Date: 21-05-2019 12:00:16 ******/
CREATE NONCLUSTERED INDEX [IX_TB_COMPLAINT_PRODUCT_DEFECT_1] ON [dbo].[TB_COMPLAINT_PRODUCT_DEFECT]
(
	[CPD_COMPLAINT_PRODUCT_FK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [TB_COMPLAINT_STATE26]    Script Date: 21-05-2019 12:00:16 ******/
CREATE NONCLUSTERED INDEX [TB_COMPLAINT_STATE26] ON [dbo].[TB_COMPLAINT_STATE]
(
	[COS_COMPLAINT_FK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 90) ON [PRIMARY]
GO
/****** Object:  Index [IX_TB_COMPLAINT_STATE_LOG]    Script Date: 21-05-2019 12:00:16 ******/
CREATE NONCLUSTERED INDEX [IX_TB_COMPLAINT_STATE_LOG] ON [dbo].[TB_COMPLAINT_STATE_LOG]
(
	[COL_CRDATE] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_TB_COMPLAINT_STATE_LOG_1]    Script Date: 21-05-2019 12:00:16 ******/
CREATE NONCLUSTERED INDEX [IX_TB_COMPLAINT_STATE_LOG_1] ON [dbo].[TB_COMPLAINT_STATE_LOG]
(
	[COL_COMPLAINT_FK] ASC,
	[COL_STATE_FK] ASC,
	[COL_CRDATE] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_TB_DEFECT]    Script Date: 21-05-2019 12:00:16 ******/
CREATE NONCLUSTERED INDEX [IX_TB_DEFECT] ON [dbo].[TB_DEFECT]
(
	[DEF_CODE] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_TB_DEFECT_1]    Script Date: 21-05-2019 12:00:16 ******/
CREATE NONCLUSTERED INDEX [IX_TB_DEFECT_1] ON [dbo].[TB_DEFECT]
(
	[DEF_PARENT] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_TB_DEFECT_2]    Script Date: 21-05-2019 12:00:16 ******/
CREATE NONCLUSTERED INDEX [IX_TB_DEFECT_2] ON [dbo].[TB_DEFECT]
(
	[DEF_L1] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_TB_DK_COMPLAINT]    Script Date: 21-05-2019 12:00:16 ******/
CREATE NONCLUSTERED INDEX [IX_TB_DK_COMPLAINT] ON [dbo].[TB_DK_COMPLAINT]
(
	[DK_STATE] ASC,
	[DK_ID] DESC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_TB_DK_IMPORT_PARAMETERS]    Script Date: 21-05-2019 12:00:16 ******/
CREATE NONCLUSTERED INDEX [IX_TB_DK_IMPORT_PARAMETERS] ON [dbo].[TB_DK_IMPORT_PARAMETERS]
(
	[DKI_PRODUCT_DK] ASC,
	[DKI_COLOR_DK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_TB_DOCUMENT_TEMPLATE_HISTORY]    Script Date: 21-05-2019 12:00:16 ******/
CREATE NONCLUSTERED INDEX [IX_TB_DOCUMENT_TEMPLATE_HISTORY] ON [dbo].[TB_DOCUMENT_TEMPLATE_HISTORY]
(
	[DOH_TEMPLATE_FK] ASC,
	[DOH_CRDATE] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [LABEL_UNIQUE_ABBR]    Script Date: 21-05-2019 12:00:16 ******/
CREATE UNIQUE NONCLUSTERED INDEX [LABEL_UNIQUE_ABBR] ON [dbo].[TB_LABEL]
(
	[LBL_ABBR] ASC,
	[LBL_LANGUAGE_FK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 90) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [LBL_FOR_SPEEDY]    Script Date: 21-05-2019 12:00:16 ******/
CREATE NONCLUSTERED INDEX [LBL_FOR_SPEEDY] ON [dbo].[TB_LABEL]
(
	[LBL_ABBR] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 90) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_TB_PRODUCT]    Script Date: 21-05-2019 12:00:16 ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_TB_PRODUCT] ON [dbo].[TB_PRODUCT]
(
	[PRO_CODE] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_TB_PRODUCT_1]    Script Date: 21-05-2019 12:00:16 ******/
CREATE NONCLUSTERED INDEX [IX_TB_PRODUCT_1] ON [dbo].[TB_PRODUCT]
(
	[PRO_CODE] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_TB_PRODUCT_2]    Script Date: 21-05-2019 12:00:16 ******/
CREATE NONCLUSTERED INDEX [IX_TB_PRODUCT_2] ON [dbo].[TB_PRODUCT]
(
	[PRO_CODE_DK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_TB_PRODUCT_3]    Script Date: 21-05-2019 12:00:16 ******/
CREATE NONCLUSTERED INDEX [IX_TB_PRODUCT_3] ON [dbo].[TB_PRODUCT]
(
	[PRO_AX_CODE] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_TB_PRODUCT_PRICE]    Script Date: 21-05-2019 12:00:16 ******/
CREATE NONCLUSTERED INDEX [IX_TB_PRODUCT_PRICE] ON [dbo].[TB_PRODUCT_PRICE]
(
	[PRP_CRDATE] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[_IMPORT_PRICELIST] ADD  CONSTRAINT [DF__IMPORT_PRICELIST_main]  DEFAULT ((0)) FOR [main]
GO
ALTER TABLE [dbo].[_pro_bar_sed] ADD  CONSTRAINT [DF__pro_bar_sed_ok]  DEFAULT ((0)) FOR [ok]
GO
ALTER TABLE [dbo].[_TB_LABEL] ADD  CONSTRAINT [DF_TB_LABEL_LBL_CRDATEx]  DEFAULT (getdate()) FOR [CRDATE]
GO
ALTER TABLE [dbo].[_TB_LABEL] ADD  CONSTRAINT [DF_TB_LABEL_LBL_MODDATEx]  DEFAULT (getdate()) FOR [MODDATE]
GO
ALTER TABLE [dbo].[_TB_LABEL] ADD  CONSTRAINT [DF_TB_LABEL_LBL_CRUSERx]  DEFAULT ((0)) FOR [CRUSER]
GO
ALTER TABLE [dbo].[_TB_LABEL] ADD  CONSTRAINT [DF_TB_LABEL_LBL_MODUSERx]  DEFAULT ((0)) FOR [MODUSER]
GO
ALTER TABLE [dbo].[_TB_PRODUCT] ADD  CONSTRAINT [DF_TB_PRODUCT_PRO_WEIGHT_PCx]  DEFAULT ((1)) FOR [WEIGHT_PC]
GO
ALTER TABLE [dbo].[_TB_PRODUCT] ADD  CONSTRAINT [DF_TB_PRODUCT_PRO_CONSUMx]  DEFAULT ((0)) FOR [CONSUM]
GO
ALTER TABLE [dbo].[TB_ADDRESS_NEW] ADD  CONSTRAINT [DF_TB_ADDRESS_NEW_ADR_CRDATE]  DEFAULT (getdate()) FOR [ADR_CRDATE]
GO
ALTER TABLE [dbo].[TB_ADDRESS_NEW] ADD  CONSTRAINT [DF_TB_ADDRESS_NEW_ADR_MODDATE]  DEFAULT (getdate()) FOR [ADR_MODDATE]
GO
ALTER TABLE [dbo].[TB_ADDRESS_NEW] ADD  CONSTRAINT [DF_TB_ADDRESS_NEW_ADR_CRUSER]  DEFAULT ((0)) FOR [ADR_CRUSER]
GO
ALTER TABLE [dbo].[TB_ADDRESS_NEW] ADD  CONSTRAINT [DF_TB_ADDRESS_NEW_ADR_MODUSER]  DEFAULT ((0)) FOR [ADR_MODUSER]
GO
ALTER TABLE [dbo].[TB_ADDRESS_NEW] ADD  CONSTRAINT [DF_TB_ADDRESS_NEW_ADR_DELETED]  DEFAULT ((0)) FOR [ADR_DELETED]
GO
ALTER TABLE [dbo].[TB_ADDRESS_NEW] ADD  CONSTRAINT [DF_TB_ADDRESS_NEW_ADR_ENDUSER]  DEFAULT ((0)) FOR [ADR_ENDUSER]
GO
ALTER TABLE [dbo].[TB_ADDRESS_NEW] ADD  CONSTRAINT [DF_TB_ADDRESS_NEW_ADR_DISTRIB]  DEFAULT ((0)) FOR [ADR_DISTRIB]
GO
ALTER TABLE [dbo].[TB_ADDRESS_NEW] ADD  CONSTRAINT [DF_TB_ADDRESS_NEW_ADR_ROOF]  DEFAULT ((0)) FOR [ADR_ROOF]
GO
ALTER TABLE [dbo].[TB_ADDRESS_NEW] ADD  CONSTRAINT [DF_TB_ADDRESS_NEW_ADR_OTHER]  DEFAULT ((0)) FOR [ADR_OTHER]
GO
ALTER TABLE [dbo].[TB_ADDRESS_NEW] ADD  CONSTRAINT [DF_TB_ADDRESS_NEW_ADR_AUTHORIZED]  DEFAULT ((0)) FOR [ADR_AUTHORIZED]
GO
ALTER TABLE [dbo].[TB_ADDRESS_old] ADD  CONSTRAINT [DF_TB_ADDRESS_ADR_CRDATE]  DEFAULT (getdate()) FOR [ADR_CRDATE]
GO
ALTER TABLE [dbo].[TB_ADDRESS_old] ADD  CONSTRAINT [DF_TB_ADDRESS_ADR_MODDATE]  DEFAULT (getdate()) FOR [ADR_MODDATE]
GO
ALTER TABLE [dbo].[TB_ADDRESS_old] ADD  CONSTRAINT [DF_TB_ADDRESS_ADR_CRUSER]  DEFAULT (0) FOR [ADR_CRUSER]
GO
ALTER TABLE [dbo].[TB_ADDRESS_old] ADD  CONSTRAINT [DF_TB_ADDRESS_ADR_MODUSER]  DEFAULT (0) FOR [ADR_MODUSER]
GO
ALTER TABLE [dbo].[TB_ADDRESS_old] ADD  CONSTRAINT [DF_TB_ADDRESS_ADR_DELETED]  DEFAULT (0) FOR [ADR_DELETED]
GO
ALTER TABLE [dbo].[TB_ADDRESS_TYPE] ADD  CONSTRAINT [DF_Table_1_ADR_CRDATE]  DEFAULT (getdate()) FOR [ADT_CRDATE]
GO
ALTER TABLE [dbo].[TB_ADDRESS_TYPE] ADD  CONSTRAINT [DF_Table_1_ADR_MODDATE]  DEFAULT (getdate()) FOR [ADT_MODDATE]
GO
ALTER TABLE [dbo].[TB_ADDRESS_TYPE] ADD  CONSTRAINT [DF_Table_1_ADR_CRUSER]  DEFAULT ((0)) FOR [ADT_CRUSER]
GO
ALTER TABLE [dbo].[TB_ADDRESS_TYPE] ADD  CONSTRAINT [DF_Table_1_ADR_MODUSER]  DEFAULT ((0)) FOR [ADT_MODUSER]
GO
ALTER TABLE [dbo].[TB_COMPLAINT] ADD  CONSTRAINT [DF_TB_COMPLAINT_COM_CRDATE]  DEFAULT (getdate()) FOR [COM_CRDATE]
GO
ALTER TABLE [dbo].[TB_COMPLAINT] ADD  CONSTRAINT [DF_TB_COMPLAINT_COM_MODDATE]  DEFAULT (getdate()) FOR [COM_MODDATE]
GO
ALTER TABLE [dbo].[TB_COMPLAINT] ADD  CONSTRAINT [DF_TB_COMPLAINT_COM_CRUSER]  DEFAULT ((0)) FOR [COM_CRUSER]
GO
ALTER TABLE [dbo].[TB_COMPLAINT] ADD  CONSTRAINT [DF_TB_COMPLAINT_COM_MODUSER]  DEFAULT ((0)) FOR [COM_MODUSER]
GO
ALTER TABLE [dbo].[TB_COMPLAINT] ADD  CONSTRAINT [DF_TB_COMPLAINT_COM_BFM]  DEFAULT ('B') FOR [COM_BFM]
GO
ALTER TABLE [dbo].[TB_COMPLAINT] ADD  CONSTRAINT [DF_TB_COMPLAINT_COM_F2_REALIZ_AUTOR]  DEFAULT ((0)) FOR [COM_F2_REALIZ_AUTOR]
GO
ALTER TABLE [dbo].[TB_COMPLAINT] ADD  CONSTRAINT [DF_TB_COMPLAINT_COM_F2_CALAMITY]  DEFAULT ((0)) FOR [COM_F2_CALAMITY]
GO
ALTER TABLE [dbo].[TB_COMPLAINT] ADD  CONSTRAINT [DF_TB_COMPLAINT_COM_F2_VENTILATION_YES]  DEFAULT ((0)) FOR [COM_F2_VENTILATION_YES]
GO
ALTER TABLE [dbo].[TB_COMPLAINT] ADD  CONSTRAINT [DF_TB_COMPLAINT_COM_F2_FOLIE]  DEFAULT ((0)) FOR [COM_F2_FOLIE]
GO
ALTER TABLE [dbo].[TB_COMPLAINT] ADD  CONSTRAINT [DF_TB_COMPLAINT_COM_F2_SPECIALIST_YES]  DEFAULT ((0)) FOR [COM_F2_SPECIALIST_YES]
GO
ALTER TABLE [dbo].[TB_COMPLAINT] ADD  CONSTRAINT [DF_TB_COMPLAINT_COM_F3_SECONDSTEP]  DEFAULT ((0)) FOR [COM_F3_SECONDSTEP]
GO
ALTER TABLE [dbo].[TB_COMPLAINT] ADD  CONSTRAINT [DF_TB_COMPLAINT_COM_F3B_DATE]  DEFAULT (getdate()) FOR [COM_F3B_DATE]
GO
ALTER TABLE [dbo].[TB_COMPLAINT] ADD  CONSTRAINT [DF_TB_COMPLAINT_COM_DELETED]  DEFAULT ((0)) FOR [COM_DELETED]
GO
ALTER TABLE [dbo].[TB_COMPLAINT] ADD  CONSTRAINT [DF_TB_COMPLAINT_COM_F2_PERCENT_OBCH]  DEFAULT ((0)) FOR [COM_F2_PERCENT_OBCH]
GO
ALTER TABLE [dbo].[TB_COMPLAINT] ADD  CONSTRAINT [DF_TB_COMPLAINT_COM_F1_ZAKAZ]  DEFAULT ((0)) FOR [COM_F1_ZAKAZ]
GO
ALTER TABLE [dbo].[TB_COMPLAINT] ADD  CONSTRAINT [DF_TB_COMPLAINT_COM_F1_DOC]  DEFAULT ((0)) FOR [COM_F1_DOC]
GO
ALTER TABLE [dbo].[TB_COMPLAINT] ADD  CONSTRAINT [DF_TB_COMPLAINT_COM_URGENT]  DEFAULT ((0)) FOR [COM_URGENT]
GO
ALTER TABLE [dbo].[TB_COMPLAINT] ADD  CONSTRAINT [DF_TB_COMPLAINT_COM_NEW]  DEFAULT ((1)) FOR [COM_NEW]
GO
ALTER TABLE [dbo].[TB_COMPLAINT] ADD  CONSTRAINT [DF_TB_COMPLAINT_COM_CHANGED]  DEFAULT ((0)) FOR [COM_CHANGED]
GO
ALTER TABLE [dbo].[TB_COMPLAINT] ADD  CONSTRAINT [DF_TB_COMPLAINT_COM_F1_FR_STOP]  DEFAULT ((0)) FOR [COM_F1_FR_STOP]
GO
ALTER TABLE [dbo].[TB_COMPLAINT] ADD  CONSTRAINT [DF_TB_COMPLAINT_COM_F1_E]  DEFAULT ((0)) FOR [COM_F1_E]
GO
ALTER TABLE [dbo].[TB_COMPLAINT] ADD  CONSTRAINT [DF_TB_COMPLAINT_COM_F1_INSURANCE]  DEFAULT ((0)) FOR [COM_F1_INSURANCE]
GO
ALTER TABLE [dbo].[TB_COMPLAINT] ADD  CONSTRAINT [DF_TB_COMPLAINT_COM_F1_FLS]  DEFAULT ((0)) FOR [COM_F1_FLS]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_CALCULATION] ADD  CONSTRAINT [DF_TB_COMPLAINT_CALCULATION_CCA_CRDATE]  DEFAULT (getdate()) FOR [CCA_CRDATE]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_CALCULATION] ADD  CONSTRAINT [DF_TB_COMPLAINT_CALCULATION_CCA_MODDATE]  DEFAULT (getdate()) FOR [CCA_MODDATE]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_CALCULATION] ADD  CONSTRAINT [DF_TB_COMPLAINT_CALCULATION_CCA_CRUSER]  DEFAULT ((0)) FOR [CCA_CRUSER]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_CALCULATION] ADD  CONSTRAINT [DF_TB_COMPLAINT_CALCULATION_CCA_MODUSER]  DEFAULT ((0)) FOR [CCA_MODUSER]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_CALCULATION_NOTE] ADD  CONSTRAINT [DF_TB_COMPLAINT_CALCULATION_NOTE_CCA_CRDATE]  DEFAULT (getdate()) FOR [CCN_CRDATE]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_CALCULATION_NOTE] ADD  CONSTRAINT [DF_TB_COMPLAINT_CALCULATION_NOTE_CCA_MODDATE]  DEFAULT (getdate()) FOR [CCN_MODDATE]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_CALCULATION_NOTE] ADD  CONSTRAINT [DF_TB_COMPLAINT_CALCULATION_NOTE_CCA_CRUSER]  DEFAULT ((0)) FOR [CCN_CRUSER]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_CALCULATION_NOTE] ADD  CONSTRAINT [DF_TB_COMPLAINT_CALCULATION_NOTE_CCA_MODUSER]  DEFAULT ((0)) FOR [CCN_MODUSER]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_CALCULATION_REAL] ADD  CONSTRAINT [DF_TB_COMPLAINT_CALCULATION_REAL_CCR_CRDATE]  DEFAULT (getdate()) FOR [CCR_CRDATE]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_CALCULATION_REAL] ADD  CONSTRAINT [DF_TB_COMPLAINT_CALCULATION_REAL_CCR_MODDATE]  DEFAULT (getdate()) FOR [CCR_MODDATE]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_CALCULATION_REAL] ADD  CONSTRAINT [DF_TB_COMPLAINT_CALCULATION_REAL_CCR_CRUSER]  DEFAULT ((0)) FOR [CCR_CRUSER]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_CALCULATION_REAL] ADD  CONSTRAINT [DF_TB_COMPLAINT_CALCULATION_REAL_CCR_MODUSER]  DEFAULT ((0)) FOR [CCR_MODUSER]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_CALCULATION_REAL] ADD  CONSTRAINT [DF_TB_COMPLAINT_CALCULATION_REAL_CCR_SCALA]  DEFAULT ((1)) FOR [CCR_SCALA]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_CALCULATION_REAL] ADD  CONSTRAINT [DF_TB_COMPLAINT_CALCULATION_REAL_CCR_AXOLD]  DEFAULT ((0)) FOR [CCR_AXOLD]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_CALCULATION_TYPE] ADD  CONSTRAINT [DF_TB_COMPLAINT_CALCULATION_TYPE_CCT_CRDATE]  DEFAULT (getdate()) FOR [CCT_CRDATE]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_CALCULATION_TYPE] ADD  CONSTRAINT [DF_TB_COMPLAINT_CALCULATION_TYPE_CCT_MODDATE]  DEFAULT (getdate()) FOR [CCT_MODDATE]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_CALCULATION_TYPE] ADD  CONSTRAINT [DF_TB_COMPLAINT_CALCULATION_TYPE_CCT_CRUSER]  DEFAULT (0) FOR [CCT_CRUSER]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_CALCULATION_TYPE] ADD  CONSTRAINT [DF_TB_COMPLAINT_CALCULATION_TYPE_CCT_MODUSER]  DEFAULT (0) FOR [CCT_MODUSER]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_CALCULATION_TYPE] ADD  CONSTRAINT [DF_TB_COMPLAINT_CALCULATION_TYPE_CCT_ENABLED]  DEFAULT (1) FOR [CCT_ENABLED]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_DOCUMENT] ADD  CONSTRAINT [DF_TB_COMPLAINT_DOCUMENT_COD_CRDATE]  DEFAULT (getdate()) FOR [COD_CRDATE]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_DOCUMENT] ADD  CONSTRAINT [DF_TB_COMPLAINT_DOCUMENT_COD_MODDATE]  DEFAULT (getdate()) FOR [COD_MODDATE]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_DOCUMENT] ADD  CONSTRAINT [DF_TB_COMPLAINT_DOCUMENT_COD_CRUSER]  DEFAULT ((0)) FOR [COD_CRUSER]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_DOCUMENT] ADD  CONSTRAINT [DF_TB_COMPLAINT_DOCUMENT_COD_MODUSER]  DEFAULT ((0)) FOR [COD_MODUSER]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_DOCUMENT] ADD  CONSTRAINT [DF_TB_COMPLAINT_DOCUMENT_COD_FI]  DEFAULT ((0)) FOR [COD_FI]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_DOCUMENT] ADD  CONSTRAINT [doc_dkall]  DEFAULT ((0)) FOR [COD_DK]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_DOCUMENT_TYPE] ADD  CONSTRAINT [DF_TB_COMPLAINT_DOCUMENT_TYPE_CDT_CRDATE]  DEFAULT (getdate()) FOR [CDT_CRDATE]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_DOCUMENT_TYPE] ADD  CONSTRAINT [DF_TB_COMPLAINT_DOCUMENT_TYPE_CDT_MODDATE]  DEFAULT (getdate()) FOR [CDT_MODDATE]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_DOCUMENT_TYPE] ADD  CONSTRAINT [DF_TB_COMPLAINT_DOCUMENT_TYPE_CDT_CRUSER]  DEFAULT (0) FOR [CDT_CRUSER]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_DOCUMENT_TYPE] ADD  CONSTRAINT [DF_TB_COMPLAINT_DOCUMENT_TYPE_CDT_MODUSER]  DEFAULT (0) FOR [CDT_MODUSER]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_DOCUMENT_TYPE] ADD  CONSTRAINT [DF_TB_COMPLAINT_DOCUMENT_TYPE_CDT_ISTEMPLATE]  DEFAULT ((0)) FOR [CDT_ISTEMPLATE]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_EXPEDICION_REAL] ADD  CONSTRAINT [DF_TB_COMPLAINT_EXPEDICION_REAL_CER_CRDATE]  DEFAULT (getdate()) FOR [CER_CRDATE]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_EXPEDICION_REAL] ADD  CONSTRAINT [DF_TB_COMPLAINT_EXPEDICION_REAL_CER_MODDATE]  DEFAULT (getdate()) FOR [CER_MODDATE]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_EXPEDICION_REAL] ADD  CONSTRAINT [DF_TB_COMPLAINT_EXPEDICION_REAL_CER_CRUSER]  DEFAULT ((0)) FOR [CER_CRUSER]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_EXPEDICION_REAL] ADD  CONSTRAINT [DF_TB_COMPLAINT_EXPEDICION_REAL_CER_MODUSER]  DEFAULT ((0)) FOR [CER_MODUSER]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_EXPEDICION_TYPE] ADD  CONSTRAINT [DF_TB_COMPLAINT_EXPEDICION_TYPE_CET_CRDATE]  DEFAULT (getdate()) FOR [CET_CRDATE]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_EXPEDICION_TYPE] ADD  CONSTRAINT [DF_TB_COMPLAINT_EXPEDICION_TYPE_CET_MODDATE]  DEFAULT (getdate()) FOR [CET_MODDATE]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_EXPEDICION_TYPE] ADD  CONSTRAINT [DF_TB_COMPLAINT_EXPEDICION_TYPE_CET_CRUSER]  DEFAULT (0) FOR [CET_CRUSER]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_EXPEDICION_TYPE] ADD  CONSTRAINT [DF_TB_COMPLAINT_EXPEDICION_TYPE_CET_MODUSER]  DEFAULT (0) FOR [CET_MODUSER]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_INDEMNIFICATION] ADD  CONSTRAINT [DF_TB_COMPLAINT_INDEMNIFICATION_COP_CRDATE]  DEFAULT (getdate()) FOR [COP_CRDATE]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_INDEMNIFICATION] ADD  CONSTRAINT [DF_TB_COMPLAINT_INDEMNIFICATION_COP_MODDATE]  DEFAULT (getdate()) FOR [COP_MODDATE]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_INDEMNIFICATION] ADD  CONSTRAINT [DF_TB_COMPLAINT_INDEMNIFICATION_COP_CRUSER]  DEFAULT ((0)) FOR [COP_CRUSER]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_INDEMNIFICATION] ADD  CONSTRAINT [DF_TB_COMPLAINT_INDEMNIFICATION_COP_MODUSER]  DEFAULT ((0)) FOR [COP_MODUSER]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_INDEMNIFICATION] ADD  CONSTRAINT [DF_TB_COMPLAINT_INDEMNIFICATION_COP_ON_OBJECT]  DEFAULT ((1)) FOR [COP_ON_OBJECT]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_INDEMNIFICATION] ADD  CONSTRAINT [DF_TB_COMPLAINT_INDEMNIFICATION_COP_ADVANCED]  DEFAULT ((0)) FOR [COP_ADVANCED]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_INDEMNIFICATION] ADD  CONSTRAINT [DF_TB_COMPLAINT_INDEMNIFICATION_COP_PRODUCT_TYPE_AC]  DEFAULT ((0)) FOR [COP_PRODUCT_TYPE_AC]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_INDEMNIFICATION] ADD  CONSTRAINT [DF_TB_COMPLAINT_INDEMNIFICATION_COP_PRODUCT_TYPE_NT]  DEFAULT ((0)) FOR [COP_PRODUCT_TYPE_NT]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_INDEMNIFICATION] ADD  CONSTRAINT [DF_TB_COMPLAINT_INDEMNIFICATION_COP_PRODUCT_TYPE_LH]  DEFAULT ((0)) FOR [COP_PRODUCT_TYPE_LH]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_INDEMNIFICATION] ADD  CONSTRAINT [DF_TB_COMPLAINT_INDEMNIFICATION_COP_PRODUCT_TYPE_LH1]  DEFAULT ((0)) FOR [COP_PRODUCT_TYPE_OT]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_INDEMNIFICATION] ADD  CONSTRAINT [DF_TB_COMPLAINT_INDEMNIFICATION_COP_STAT_PERCENT_COUNT]  DEFAULT ((0)) FOR [COP_STAT_PERCENT_COUNT]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_INDEMNIFICATION_DEFECT] ADD  CONSTRAINT [DF_TB_COMPLAINT_INDEMNIFICATION_DEFECT_CPD_CRDATE]  DEFAULT (getdate()) FOR [CPD_CRDATE]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_INDEMNIFICATION_DEFECT] ADD  CONSTRAINT [DF_TB_COMPLAINT_INDEMNIFICATION_DEFECT_CPD_MODDATE]  DEFAULT (getdate()) FOR [CPD_MODDATE]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_INDEMNIFICATION_DEFECT] ADD  CONSTRAINT [DF_TB_COMPLAINT_INDEMNIFICATION_DEFECT_CPD_CRUSER]  DEFAULT ((0)) FOR [CPD_CRUSER]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_INDEMNIFICATION_DEFECT] ADD  CONSTRAINT [DF_TB_COMPLAINT_INDEMNIFICATION_DEFECT_CPD_MODUSER]  DEFAULT ((0)) FOR [CPD_MODUSER]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_INDEMNIFICATION_DEFECT] ADD  CONSTRAINT [DF_TB_COMPLAINT_INDEMNIFICATION_DEFECT_CPD_COUNT]  DEFAULT ((0)) FOR [CPD_COUNT]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_INDEMNIFICATION_DEFECT] ADD  CONSTRAINT [DF_TB_COMPLAINT_INDEMNIFICATION_DEFECT_CPD_STAT_PERCENT_COUNT]  DEFAULT ((0)) FOR [CPD_STAT_PERCENT_COUNT]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_INDEMNIFICATION_DEFECT] ADD  CONSTRAINT [DF_TB_COMPLAINT_INDEMNIFICATION_DEFECT_CPD_MAIN]  DEFAULT ((0)) FOR [CPD_MAIN]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_NOTE] ADD  CONSTRAINT [DF_TB_COMPLAINT_NOTE_CON_CRDATE]  DEFAULT (getdate()) FOR [CON_CRDATE]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_NOTE] ADD  CONSTRAINT [DF_TB_COMPLAINT_NOTE_CON_MODDATE]  DEFAULT (getdate()) FOR [CON_MODDATE]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_NOTE] ADD  CONSTRAINT [DF_TB_COMPLAINT_NOTE_CON_CRUSER]  DEFAULT ((0)) FOR [CON_CRUSER]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_NOTE] ADD  CONSTRAINT [DF_TB_COMPLAINT_NOTE_CON_MODUSER]  DEFAULT ((0)) FOR [CON_MODUSER]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_PRODUCT] ADD  CONSTRAINT [DF_TB_COMPLAINT_PRODUCT_COP_CRDATE]  DEFAULT (getdate()) FOR [COP_CRDATE]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_PRODUCT] ADD  CONSTRAINT [DF_TB_COMPLAINT_PRODUCT_COP_MODDATE]  DEFAULT (getdate()) FOR [COP_MODDATE]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_PRODUCT] ADD  CONSTRAINT [DF_TB_COMPLAINT_PRODUCT_COP_CRUSER]  DEFAULT ((0)) FOR [COP_CRUSER]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_PRODUCT] ADD  CONSTRAINT [DF_TB_COMPLAINT_PRODUCT_COP_MODUSER]  DEFAULT ((0)) FOR [COP_MODUSER]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_PRODUCT] ADD  CONSTRAINT [DF_TB_COMPLAINT_PRODUCT_COP_ON_OBJECT]  DEFAULT ((1)) FOR [COP_ON_OBJECT]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_PRODUCT] ADD  CONSTRAINT [DF_TB_COMPLAINT_PRODUCT_COP_ADVANCED]  DEFAULT ((0)) FOR [COP_ADVANCED]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_PRODUCT] ADD  CONSTRAINT [DF_TB_COMPLAINT_PRODUCT_COP_PRODUCT_TYPE_AC]  DEFAULT ((0)) FOR [COP_PRODUCT_TYPE_AC]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_PRODUCT] ADD  CONSTRAINT [DF_TB_COMPLAINT_PRODUCT_COP_PRODUCT_TYPE_NT]  DEFAULT ((0)) FOR [COP_PRODUCT_TYPE_NT]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_PRODUCT] ADD  CONSTRAINT [DF_TB_COMPLAINT_PRODUCT_COP_PRODUCT_TYPE_LH]  DEFAULT ((0)) FOR [COP_PRODUCT_TYPE_LH]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_PRODUCT] ADD  CONSTRAINT [DF_TB_COMPLAINT_PRODUCT_COP_PRODUCT_TYPE_LH1]  DEFAULT ((0)) FOR [COP_PRODUCT_TYPE_OT]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_PRODUCT] ADD  CONSTRAINT [DF_TB_COMPLAINT_PRODUCT_COP_STAT_PERCENT_COUNT]  DEFAULT ((0)) FOR [COP_STAT_PERCENT_COUNT]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_PRODUCT] ADD  CONSTRAINT [DF_TB_COMPLAINT_PRODUCT_COP_QM_ACTIVE]  DEFAULT ((1)) FOR [COP_QM_ACTIVE]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_PRODUCT] ADD  CONSTRAINT [DF_TB_COMPLAINT_PRODUCT_COP_MAIN]  DEFAULT ((0)) FOR [COP_MAIN]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_PRODUCT_DEFECT] ADD  CONSTRAINT [DF_TB_COMPLAINT_PRODUCT_DEFECT_CPD_CRDATE]  DEFAULT (getdate()) FOR [CPD_CRDATE]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_PRODUCT_DEFECT] ADD  CONSTRAINT [DF_TB_COMPLAINT_PRODUCT_DEFECT_CPD_MODDATE]  DEFAULT (getdate()) FOR [CPD_MODDATE]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_PRODUCT_DEFECT] ADD  CONSTRAINT [DF_TB_COMPLAINT_PRODUCT_DEFECT_CPD_CRUSER]  DEFAULT ((0)) FOR [CPD_CRUSER]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_PRODUCT_DEFECT] ADD  CONSTRAINT [DF_TB_COMPLAINT_PRODUCT_DEFECT_CPD_MODUSER]  DEFAULT ((0)) FOR [CPD_MODUSER]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_PRODUCT_DEFECT] ADD  CONSTRAINT [DF_TB_COMPLAINT_PRODUCT_DEFECT_CPD_COUNT]  DEFAULT ((0)) FOR [CPD_COUNT]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_PRODUCT_DEFECT] ADD  CONSTRAINT [DF_TB_COMPLAINT_PRODUCT_DEFECT_CPD_STAT_PERCENT_COUNT]  DEFAULT ((0)) FOR [CPD_STAT_PERCENT_COUNT]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_PRODUCT_DEFECT] ADD  CONSTRAINT [DF_TB_COMPLAINT_PRODUCT_DEFECT_CPD_MAIN]  DEFAULT ((0)) FOR [CPD_MAIN]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_STATE] ADD  CONSTRAINT [DF_TB_COMPLAINT_STATE_COS_CRDATE]  DEFAULT (getdate()) FOR [COS_CRDATE]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_STATE] ADD  CONSTRAINT [DF_TB_COMPLAINT_STATE_COS_MODDATE]  DEFAULT (getdate()) FOR [COS_MODDATE]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_STATE] ADD  CONSTRAINT [DF_TB_COMPLAINT_STATE_COS_CRUSER]  DEFAULT ((0)) FOR [COS_CRUSER]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_STATE] ADD  CONSTRAINT [DF_TB_COMPLAINT_STATE_COS_MODUSER]  DEFAULT ((0)) FOR [COS_MODUSER]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_STATE] ADD  CONSTRAINT [DF_TB_COMPLAINT_STATE_COS_VALID]  DEFAULT ((0)) FOR [COS_VALID]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_STATE_LOG] ADD  CONSTRAINT [DF_TB_COMPLAINT_STATE_LOG_COL_CRDATE]  DEFAULT (getdate()) FOR [COL_CRDATE]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_STATE_LOG] ADD  CONSTRAINT [DF_TB_COMPLAINT_STATE_LOG_COL_CRUSER]  DEFAULT ((0)) FOR [COL_CRUSER]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_TYPE] ADD  CONSTRAINT [DF_TB_COMPLAINT_TYPE_COT_CRDATE]  DEFAULT (getdate()) FOR [COT_CRDATE]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_TYPE] ADD  CONSTRAINT [DF_TB_COMPLAINT_TYPE_COT_MODDATE]  DEFAULT (getdate()) FOR [COT_MODDATE]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_TYPE] ADD  CONSTRAINT [DF_TB_COMPLAINT_TYPE_COT_CRUSER]  DEFAULT (0) FOR [COT_CRUSER]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_TYPE] ADD  CONSTRAINT [DF_TB_COMPLAINT_TYPE_COT_MODUSER]  DEFAULT (0) FOR [COT_MODUSER]
GO
ALTER TABLE [dbo].[TB_COUNTRY_PRICE_INDEX] ADD  CONSTRAINT [DF_TB_COUNTRY_PRICE_INDEX_CPI_INDEX]  DEFAULT ((1)) FOR [CPI_INDEX]
GO
ALTER TABLE [dbo].[TB_DEFECT] ADD  CONSTRAINT [DF_TB_DEFECT_DEF_CRDATE2]  DEFAULT (getdate()) FOR [DEF_CRDATE]
GO
ALTER TABLE [dbo].[TB_DEFECT] ADD  CONSTRAINT [DF_TB_DEFECT_DEF_MODDATE2]  DEFAULT (getdate()) FOR [DEF_MODDATE]
GO
ALTER TABLE [dbo].[TB_DEFECT] ADD  CONSTRAINT [DF_TB_DEFECT_DEF_CRUSER2]  DEFAULT ((0)) FOR [DEF_CRUSER]
GO
ALTER TABLE [dbo].[TB_DEFECT] ADD  CONSTRAINT [DF_TB_DEFECT_DEF_MODUSER2]  DEFAULT ((0)) FOR [DEF_MODUSER]
GO
ALTER TABLE [dbo].[TB_DEFECT] ADD  CONSTRAINT [DF_TB_DEFECT_DEF_B2]  DEFAULT ((0)) FOR [DEF_B]
GO
ALTER TABLE [dbo].[TB_DEFECT] ADD  CONSTRAINT [DF_TB_DEFECT_DEF_F2]  DEFAULT ((0)) FOR [DEF_F]
GO
ALTER TABLE [dbo].[TB_DEFECT] ADD  CONSTRAINT [DF_TB_DEFECT_DEF_M2]  DEFAULT ((0)) FOR [DEF_M]
GO
ALTER TABLE [dbo].[TB_DEFECT] ADD  CONSTRAINT [DF_TB_DEFECT_DEF_NEW2]  DEFAULT ((0)) FOR [DEF_NEW]
GO
ALTER TABLE [dbo].[TB_DEFECT] ADD  CONSTRAINT [DF_TB_DEFECT_DEF_PREPOST2]  DEFAULT ((0)) FOR [DEF_PRE]
GO
ALTER TABLE [dbo].[TB_DEFECT] ADD  CONSTRAINT [DF_TB_DEFECT_DEF_P12]  DEFAULT ((0)) FOR [DEF_P1]
GO
ALTER TABLE [dbo].[TB_DEFECT] ADD  CONSTRAINT [DF_TB_DEFECT_DEF_P112]  DEFAULT ((0)) FOR [DEF_P2]
GO
ALTER TABLE [dbo].[TB_DEFECT] ADD  CONSTRAINT [DF_TB_DEFECT_DEF_P11_12]  DEFAULT ((0)) FOR [DEF_P3]
GO
ALTER TABLE [dbo].[TB_DEFECT] ADD  CONSTRAINT [DF_TB_DEFECT_DEF_P11_22]  DEFAULT ((0)) FOR [DEF_P4]
GO
ALTER TABLE [dbo].[TB_DEFECT] ADD  CONSTRAINT [DF_TB_DEFECT_DEF_P11_32]  DEFAULT ((0)) FOR [DEF_P5]
GO
ALTER TABLE [dbo].[TB_DEFECT] ADD  CONSTRAINT [DF_TB_DEFECT_DEF_P11_42]  DEFAULT ((0)) FOR [DEF_P6]
GO
ALTER TABLE [dbo].[TB_DEFECT] ADD  CONSTRAINT [DF_TB_DEFECT_DEF_P11_52]  DEFAULT ((0)) FOR [DEF_P7]
GO
ALTER TABLE [dbo].[TB_DEFECT] ADD  CONSTRAINT [DF_TB_DEFECT_DEF_LEVEL2]  DEFAULT ((3)) FOR [DEF_LEVEL]
GO
ALTER TABLE [dbo].[TB_DEFECT] ADD  CONSTRAINT [DF_TB_DEFECT_DEF_STATHIDE]  DEFAULT ((0)) FOR [DEF_STATHIDE]
GO
ALTER TABLE [dbo].[TB_DEFECT_CODE] ADD  CONSTRAINT [DF_TB_DEFECT_CODE_DFC_ONOBJECT]  DEFAULT ((1)) FOR [DFC_ONOBJECT]
GO
ALTER TABLE [dbo].[TB_DEFECT_old] ADD  CONSTRAINT [DF_TB_DEFECT_DEF_CRDATE]  DEFAULT (getdate()) FOR [DEF_CRDATE]
GO
ALTER TABLE [dbo].[TB_DEFECT_old] ADD  CONSTRAINT [DF_TB_DEFECT_DEF_MODDATE]  DEFAULT (getdate()) FOR [DEF_MODDATE]
GO
ALTER TABLE [dbo].[TB_DEFECT_old] ADD  CONSTRAINT [DF_TB_DEFECT_DEF_CRUSER]  DEFAULT (0) FOR [DEF_CRUSER]
GO
ALTER TABLE [dbo].[TB_DEFECT_old] ADD  CONSTRAINT [DF_TB_DEFECT_DEF_MODUSER]  DEFAULT (0) FOR [DEF_MODUSER]
GO
ALTER TABLE [dbo].[TB_DEFECT_old] ADD  CONSTRAINT [DF_TB_DEFECT_DEF_B]  DEFAULT (0) FOR [DEF_B]
GO
ALTER TABLE [dbo].[TB_DEFECT_old] ADD  CONSTRAINT [DF_TB_DEFECT_DEF_F]  DEFAULT (0) FOR [DEF_F]
GO
ALTER TABLE [dbo].[TB_DEFECT_old] ADD  CONSTRAINT [DF_TB_DEFECT_DEF_M]  DEFAULT (0) FOR [DEF_M]
GO
ALTER TABLE [dbo].[TB_DISTRIB_old] ADD  CONSTRAINT [DF_TB_DISTRIB_DIS_CRDATE]  DEFAULT (getdate()) FOR [DIS_CRDATE]
GO
ALTER TABLE [dbo].[TB_DISTRIB_old] ADD  CONSTRAINT [DF_TB_DISTRIB_DIS_MODDATE]  DEFAULT (getdate()) FOR [DIS_MODDATE]
GO
ALTER TABLE [dbo].[TB_DISTRIB_old] ADD  CONSTRAINT [DF_TB_DISTRIB_DIS_CRUSER]  DEFAULT (0) FOR [DIS_CRUSER]
GO
ALTER TABLE [dbo].[TB_DISTRIB_old] ADD  CONSTRAINT [DF_TB_DISTRIB_DIS_MODUSER]  DEFAULT (0) FOR [DIS_MODUSER]
GO
ALTER TABLE [dbo].[TB_DK_COMPLAINT] ADD  CONSTRAINT [DF_TB_DK_COMPLAINT_dk_crdate]  DEFAULT (getdate()) FOR [dk_crdate]
GO
ALTER TABLE [dbo].[TB_DK_COMPLAINT] ADD  CONSTRAINT [DF_TB_DK_COMPLAINT_DK_STATE]  DEFAULT ((0)) FOR [DK_STATE]
GO
ALTER TABLE [dbo].[TB_DK_IMPORT] ADD  CONSTRAINT [DF_TB_DK_IMPORT_DKI_CRDATE]  DEFAULT (getdate()) FOR [DKI_CRDATE]
GO
ALTER TABLE [dbo].[TB_DOCUMENT_TEMPLATE] ADD  CONSTRAINT [DF_TB_DOCUMENT_TEMPLATE_DOT_CRDATE]  DEFAULT (getdate()) FOR [DOT_CRDATE]
GO
ALTER TABLE [dbo].[TB_DOCUMENT_TEMPLATE] ADD  CONSTRAINT [DF_TB_DOCUMENT_TEMPLATE_DOT_MODDATE]  DEFAULT (getdate()) FOR [DOT_MODDATE]
GO
ALTER TABLE [dbo].[TB_DOCUMENT_TEMPLATE] ADD  CONSTRAINT [DF_TB_DOCUMENT_TEMPLATE_DOT_CRUSER]  DEFAULT (0) FOR [DOT_CRUSER]
GO
ALTER TABLE [dbo].[TB_DOCUMENT_TEMPLATE] ADD  CONSTRAINT [DF_TB_DOCUMENT_TEMPLATE_DOT_MODUSER]  DEFAULT (0) FOR [DOT_MODUSER]
GO
ALTER TABLE [dbo].[TB_DOCUMENT_TEMPLATE_HISTORY] ADD  CONSTRAINT [DF_TB_DOCUMENT_TEMPLATE_HISTORY_DOH_CRDATE]  DEFAULT (getdate()) FOR [DOH_CRDATE]
GO
ALTER TABLE [dbo].[TB_DOCUMENT_TEMPLATE_HISTORY] ADD  CONSTRAINT [DF_TB_DOCUMENT_TEMPLATE_HISTORY_DOH_CRUSER]  DEFAULT ((0)) FOR [DOH_CRUSER]
GO
ALTER TABLE [dbo].[TB_EDIT] ADD  CONSTRAINT [DF_TB_EDIT_EDT_CRUSER]  DEFAULT ((0)) FOR [EDT_CRUSER]
GO
ALTER TABLE [dbo].[TB_EDIT] ADD  CONSTRAINT [DF_TB_EDIT_EDT_MODUSER]  DEFAULT ((0)) FOR [EDT_MODUSER]
GO
ALTER TABLE [dbo].[TB_EDIT] ADD  CONSTRAINT [DF_TB_EDIT_EDT_CRDATE]  DEFAULT (getdate()) FOR [EDT_CRDATE]
GO
ALTER TABLE [dbo].[TB_EDIT] ADD  CONSTRAINT [DF_TB_EDIT_EDT_MODDATE]  DEFAULT (getdate()) FOR [EDT_MODDATE]
GO
ALTER TABLE [dbo].[TB_ITEM] ADD  CONSTRAINT [DF_TB_ITEM_ITM_CRDATE]  DEFAULT (getdate()) FOR [ITM_CRDATE]
GO
ALTER TABLE [dbo].[TB_ITEM] ADD  CONSTRAINT [DF_TB_ITEM_ITM_MODDATE]  DEFAULT (getdate()) FOR [ITM_MODDATE]
GO
ALTER TABLE [dbo].[TB_ITEM] ADD  CONSTRAINT [DF_TB_ITEM_ITM_CRUSER]  DEFAULT (0) FOR [ITM_CRUSER]
GO
ALTER TABLE [dbo].[TB_ITEM] ADD  CONSTRAINT [DF_TB_ITEM_ITM_MODUSER]  DEFAULT (0) FOR [ITM_MODUSER]
GO
ALTER TABLE [dbo].[TB_ITEM_PRICE_INDEX] ADD  CONSTRAINT [DF_TB_ITEM_PRICE_INDEX_IPI_PRICE]  DEFAULT ((0)) FOR [IPI_PRICE]
GO
ALTER TABLE [dbo].[TB_ITEM_PRICE_INDEX] ADD  CONSTRAINT [DF_TB_ITEM_PRICE_INDEX_IPI_WEIGHT]  DEFAULT ((0)) FOR [IPI_WEIGHT]
GO
ALTER TABLE [dbo].[TB_ITEM_TYPE] ADD  CONSTRAINT [DF_TB_ITEM_TYPE_ITT_CRDATE]  DEFAULT (getdate()) FOR [ITT_CRDATE]
GO
ALTER TABLE [dbo].[TB_ITEM_TYPE] ADD  CONSTRAINT [DF_TB_ITEM_TYPE_ITT_MODDATE]  DEFAULT (getdate()) FOR [ITT_MODDATE]
GO
ALTER TABLE [dbo].[TB_ITEM_TYPE] ADD  CONSTRAINT [DF_TB_ITEM_TYPE_ITT_CRUSER]  DEFAULT (0) FOR [ITT_CRUSER]
GO
ALTER TABLE [dbo].[TB_ITEM_TYPE] ADD  CONSTRAINT [DF_TB_ITEM_TYPE_ITT_MODUSER]  DEFAULT (0) FOR [ITT_MODUSER]
GO
ALTER TABLE [dbo].[TB_ITEM_TYPE] ADD  CONSTRAINT [DF_TB_ITEM_TYPE_ITT_LANGUAGE_FK]  DEFAULT (1) FOR [ITT_LANGUAGE_FK]
GO
ALTER TABLE [dbo].[TB_KLIMA] ADD  CONSTRAINT [DF_TB_KLIMA_KLI_COUNTRY_FK]  DEFAULT (9) FOR [KLI_COUNTRY_FK]
GO
ALTER TABLE [dbo].[TB_LABEL] ADD  CONSTRAINT [DF_TB_LABEL_LBL_CRDATE]  DEFAULT (getdate()) FOR [LBL_CRDATE]
GO
ALTER TABLE [dbo].[TB_LABEL] ADD  CONSTRAINT [DF_TB_LABEL_LBL_MODDATE]  DEFAULT (getdate()) FOR [LBL_MODDATE]
GO
ALTER TABLE [dbo].[TB_LABEL] ADD  CONSTRAINT [DF_TB_LABEL_LBL_CRUSER]  DEFAULT (0) FOR [LBL_CRUSER]
GO
ALTER TABLE [dbo].[TB_LABEL] ADD  CONSTRAINT [DF_TB_LABEL_LBL_MODUSER]  DEFAULT (0) FOR [LBL_MODUSER]
GO
ALTER TABLE [dbo].[TB_LANGUAGE] ADD  CONSTRAINT [DF_TB_LANGUAGE_LAN_CRDATE]  DEFAULT (getdate()) FOR [LAN_CRDATE]
GO
ALTER TABLE [dbo].[TB_LANGUAGE] ADD  CONSTRAINT [DF_TB_LANGUAGE_LAN_MODDATE]  DEFAULT (getdate()) FOR [LAN_MODDATE]
GO
ALTER TABLE [dbo].[TB_LANGUAGE] ADD  CONSTRAINT [DF_TB_LANGUAGE_LAN_CRUSER]  DEFAULT (0) FOR [LAN_CRUSER]
GO
ALTER TABLE [dbo].[TB_LANGUAGE] ADD  CONSTRAINT [DF_TB_LANGUAGE_LAN_MODUSER]  DEFAULT (0) FOR [LAN_MODUSER]
GO
ALTER TABLE [dbo].[TB_LANGUAGE] ADD  CONSTRAINT [DF_TB_LANGUAGE_LAN_ENABLED]  DEFAULT (0) FOR [LAN_ENABLED]
GO
ALTER TABLE [dbo].[TB_NO_COMPLAINT] ADD  CONSTRAINT [DF_TB_NO_COMPLAINT_dk_crdate]  DEFAULT (getdate()) FOR [dk_crdate]
GO
ALTER TABLE [dbo].[TB_NO_COMPLAINT] ADD  CONSTRAINT [DF_TB_NO_COMPLAINT_DK_STATE]  DEFAULT ((0)) FOR [DK_STATE]
GO
ALTER TABLE [dbo].[TB_PLAN] ADD  CONSTRAINT [DF_TB_PLAN_PLA_CRDATE]  DEFAULT (getdate()) FOR [PLA_CRDATE]
GO
ALTER TABLE [dbo].[TB_PLAN] ADD  CONSTRAINT [DF_TB_PLAN_PLA_MODDATE]  DEFAULT (getdate()) FOR [PLA_MODDATE]
GO
ALTER TABLE [dbo].[TB_PLAN] ADD  CONSTRAINT [DF_TB_PLAN_PLA_CRUSER]  DEFAULT (0) FOR [PLA_CRUSER]
GO
ALTER TABLE [dbo].[TB_PLAN] ADD  CONSTRAINT [DF_TB_PLAN_PLA_MODUSER]  DEFAULT (0) FOR [PLA_MODUSER]
GO
ALTER TABLE [dbo].[TB_PLAN] ADD  CONSTRAINT [DF_TB_PLAN_PLA_STORNO]  DEFAULT (0) FOR [PLA_STORNO]
GO
ALTER TABLE [dbo].[TB_PRODUCT] ADD  CONSTRAINT [DF_TB_PRODUCT_PRO_CRDATEN]  DEFAULT (getdate()) FOR [PRO_CRDATE]
GO
ALTER TABLE [dbo].[TB_PRODUCT] ADD  CONSTRAINT [DF_TB_PRODUCT_PRO_MODDATEN]  DEFAULT (getdate()) FOR [PRO_MODDATE]
GO
ALTER TABLE [dbo].[TB_PRODUCT] ADD  CONSTRAINT [DF_TB_PRODUCT_PRO_CRUSERN]  DEFAULT ((0)) FOR [PRO_CRUSER]
GO
ALTER TABLE [dbo].[TB_PRODUCT] ADD  CONSTRAINT [DF_TB_PRODUCT_PRO_MODUSERN]  DEFAULT ((0)) FOR [PRO_MODUSER]
GO
ALTER TABLE [dbo].[TB_PRODUCT] ADD  CONSTRAINT [DF_TB_PRODUCT_PRO_WEIGHT_PCN]  DEFAULT ((1)) FOR [PRO_WEIGHT_PC]
GO
ALTER TABLE [dbo].[TB_PRODUCT] ADD  CONSTRAINT [DF_TB_PRODUCT_PRO_CONSUMN]  DEFAULT ((0)) FOR [PRO_CONSUM]
GO
ALTER TABLE [dbo].[TB_PRODUCT_old] ADD  CONSTRAINT [DF_TB_PRODUCT_PRO_CRDATE]  DEFAULT (getdate()) FOR [PRO_CRDATE]
GO
ALTER TABLE [dbo].[TB_PRODUCT_old] ADD  CONSTRAINT [DF_TB_PRODUCT_PRO_MODDATE]  DEFAULT (getdate()) FOR [PRO_MODDATE]
GO
ALTER TABLE [dbo].[TB_PRODUCT_old] ADD  CONSTRAINT [DF_TB_PRODUCT_PRO_CRUSER]  DEFAULT (0) FOR [PRO_CRUSER]
GO
ALTER TABLE [dbo].[TB_PRODUCT_old] ADD  CONSTRAINT [DF_TB_PRODUCT_PRO_MODUSER]  DEFAULT (0) FOR [PRO_MODUSER]
GO
ALTER TABLE [dbo].[TB_PRODUCT_old] ADD  CONSTRAINT [DF_TB_PRODUCT_PRO_WEIGHT_PC]  DEFAULT (1) FOR [PRO_WEIGHT_PC]
GO
ALTER TABLE [dbo].[TB_PRODUCT_old] ADD  CONSTRAINT [DF_TB_PRODUCT_PRO_CONSUM]  DEFAULT (0) FOR [PRO_CONSUM]
GO
ALTER TABLE [dbo].[TB_PRODUCT_PRICE] ADD  CONSTRAINT [DF_TB_PRODUCT_PRICE_PRP_CRDATE]  DEFAULT (getdate()) FOR [PRP_CRDATE]
GO
ALTER TABLE [dbo].[TB_REALIZ_old] ADD  CONSTRAINT [DF_TB_REALIZ_REA_CRDATE]  DEFAULT (getdate()) FOR [REA_CRDATE]
GO
ALTER TABLE [dbo].[TB_REALIZ_old] ADD  CONSTRAINT [DF_TB_REALIZ_REA_MODDATE]  DEFAULT (getdate()) FOR [REA_MODDATE]
GO
ALTER TABLE [dbo].[TB_REALIZ_old] ADD  CONSTRAINT [DF_TB_REALIZ_REA_CRUSER]  DEFAULT (1) FOR [REA_CRUSER]
GO
ALTER TABLE [dbo].[TB_REALIZ_old] ADD  CONSTRAINT [DF_TB_REALIZ_REA_MODUSER]  DEFAULT (1) FOR [REA_MODUSER]
GO
ALTER TABLE [dbo].[TB_REALIZ_old] ADD  CONSTRAINT [DF_TB_REALIZ_REA_AUTHORIZED]  DEFAULT (0) FOR [REA_AUTHORIZED]
GO
ALTER TABLE [dbo].[TB_REGION] ADD  CONSTRAINT [DF_TB_REGION_REG_CRDATE]  DEFAULT (getdate()) FOR [REG_CRDATE]
GO
ALTER TABLE [dbo].[TB_REGION] ADD  CONSTRAINT [DF_TB_REGION_REG_MODDATE]  DEFAULT (getdate()) FOR [REG_MODDATE]
GO
ALTER TABLE [dbo].[TB_REGION] ADD  CONSTRAINT [DF_TB_REGION_REG_CRUSER]  DEFAULT (0) FOR [REG_CRUSER]
GO
ALTER TABLE [dbo].[TB_REGION] ADD  CONSTRAINT [DF_TB_REGION_REG_MODUSER]  DEFAULT (0) FOR [REG_MODUSER]
GO
ALTER TABLE [dbo].[TB_SALES] ADD  CONSTRAINT [DF_TB_SALES_SAL_CRDATE_1]  DEFAULT (getdate()) FOR [SAL_CRDATE]
GO
ALTER TABLE [dbo].[TB_SALES] ADD  CONSTRAINT [DF_TB_SALES_SAL_CRUSER_1]  DEFAULT ((0)) FOR [SAL_CRUSER]
GO
ALTER TABLE [dbo].[TB_SALES] ADD  CONSTRAINT [DF_TB_SALES_SAL_MODDATE_1]  DEFAULT (getdate()) FOR [SAL_MODDATE]
GO
ALTER TABLE [dbo].[TB_SALES] ADD  CONSTRAINT [DF_TB_SALES_SAL_MODUSER]  DEFAULT ((0)) FOR [SAL_MODUSER]
GO
ALTER TABLE [dbo].[TB_SALES_OLD] ADD  CONSTRAINT [DF_TB_SALES_SAL_CRDATE]  DEFAULT (getdate()) FOR [SAL_CRDATE]
GO
ALTER TABLE [dbo].[TB_SALES_OLD] ADD  CONSTRAINT [DF_TB_SALES_SAL_CRUSER]  DEFAULT ((0)) FOR [SAL_CRUSER]
GO
ALTER TABLE [dbo].[TB_SALES_OLD] ADD  CONSTRAINT [DF_TB_SALES_SAL_MODDATE]  DEFAULT (getdate()) FOR [SAL_MODDATE]
GO
ALTER TABLE [dbo].[TB_SALES_OLD] ADD  CONSTRAINT [DF_Table_1_]  DEFAULT ((0)) FOR [SAL_MODUSER]
GO
ALTER TABLE [dbo].[TB_SESTRA] ADD  CONSTRAINT [DF_TB_SESTRA_SES_CRDATE]  DEFAULT (getdate()) FOR [SES_CRDATE]
GO
ALTER TABLE [dbo].[TB_SESTRA] ADD  CONSTRAINT [DF_TB_SESTRA_SES_MODDATE]  DEFAULT (getdate()) FOR [SES_MODDATE]
GO
ALTER TABLE [dbo].[TB_SESTRA] ADD  CONSTRAINT [DF_TB_SESTRA_SES_CRUSER]  DEFAULT (0) FOR [SES_CRUSER]
GO
ALTER TABLE [dbo].[TB_SESTRA] ADD  CONSTRAINT [DF_TB_SESTRA_SES_MODUSER]  DEFAULT (0) FOR [SES_MODUSER]
GO
ALTER TABLE [dbo].[TB_STAT_CATEGORY] ADD  CONSTRAINT [DF_TB_STAT_CATEGORY_STC_CRDATE]  DEFAULT (getdate()) FOR [STC_CRDATE]
GO
ALTER TABLE [dbo].[TB_STAT_CATEGORY] ADD  CONSTRAINT [DF_TB_STAT_CATEGORY_STC_MODDATE]  DEFAULT (getdate()) FOR [STC_MODDATE]
GO
ALTER TABLE [dbo].[TB_STAT_CATEGORY] ADD  CONSTRAINT [DF_TB_STAT_CATEGORY_STC_CRUSER]  DEFAULT (0) FOR [STC_CRUSER]
GO
ALTER TABLE [dbo].[TB_STAT_CATEGORY] ADD  CONSTRAINT [DF_TB_STAT_CATEGORY_STC_MODUSER]  DEFAULT (0) FOR [STC_MODUSER]
GO
ALTER TABLE [dbo].[TB_STAT_CATEGORY] ADD  CONSTRAINT [DF_TB_STAT_CATEGORY_STC_ORDER]  DEFAULT (0) FOR [STC_ORDER]
GO
ALTER TABLE [dbo].[TB_STAT_CATEGORY_FILE] ADD  CONSTRAINT [DF_TB_STAT_CATEGORY_FILE_SCF_CRDATE]  DEFAULT (getdate()) FOR [SCF_CRDATE]
GO
ALTER TABLE [dbo].[TB_STAT_CATEGORY_FILE] ADD  CONSTRAINT [DF_TB_STAT_CATEGORY_FILE_SCF_MODDATE]  DEFAULT (getdate()) FOR [SCF_MODDATE]
GO
ALTER TABLE [dbo].[TB_STAT_CATEGORY_FILE] ADD  CONSTRAINT [DF_TB_STAT_CATEGORY_FILE_SCF_CRUSER]  DEFAULT (0) FOR [SCF_CRUSER]
GO
ALTER TABLE [dbo].[TB_STAT_CATEGORY_FILE] ADD  CONSTRAINT [DF_TB_STAT_CATEGORY_FILE_SCF_MODUSER]  DEFAULT (0) FOR [SCF_MODUSER]
GO
ALTER TABLE [dbo].[TB_STAT_CATEGORY_FILE_TEXT] ADD  CONSTRAINT [DF_TB_STAT_CATEGORY_FILE_TEXT_SFT_CRDATE]  DEFAULT (getdate()) FOR [SFT_CRDATE]
GO
ALTER TABLE [dbo].[TB_STAT_CATEGORY_FILE_TEXT] ADD  CONSTRAINT [DF_TB_STAT_CATEGORY_FILE_TEXT_SFT_MODDATE]  DEFAULT (getdate()) FOR [SFT_MODDATE]
GO
ALTER TABLE [dbo].[TB_STAT_CATEGORY_FILE_TEXT] ADD  CONSTRAINT [DF_TB_STAT_CATEGORY_FILE_TEXT_SFT_CRUSER]  DEFAULT (0) FOR [SFT_CRUSER]
GO
ALTER TABLE [dbo].[TB_STAT_CATEGORY_FILE_TEXT] ADD  CONSTRAINT [DF_TB_STAT_CATEGORY_FILE_TEXT_SFT_MODUSER]  DEFAULT (0) FOR [SFT_MODUSER]
GO
ALTER TABLE [dbo].[TB_STAT_CATEGORY_TEXT] ADD  CONSTRAINT [DF_TB_STAT_CATEGORY_TEXT_SCT_CRDATE]  DEFAULT (getdate()) FOR [SCT_CRDATE]
GO
ALTER TABLE [dbo].[TB_STAT_CATEGORY_TEXT] ADD  CONSTRAINT [DF_TB_STAT_CATEGORY_TEXT_SCT_MODDATE]  DEFAULT (getdate()) FOR [SCT_MODDATE]
GO
ALTER TABLE [dbo].[TB_STAT_CATEGORY_TEXT] ADD  CONSTRAINT [DF_TB_STAT_CATEGORY_TEXT_SCT_CRUSER]  DEFAULT (0) FOR [SCT_CRUSER]
GO
ALTER TABLE [dbo].[TB_STAT_CATEGORY_TEXT] ADD  CONSTRAINT [DF_TB_STAT_CATEGORY_TEXT_SCT_MODUSER]  DEFAULT (0) FOR [SCT_MODUSER]
GO
ALTER TABLE [dbo].[TB_STAT_STATE] ADD  CONSTRAINT [DF_TB_STAT_STATE_SST_CRDATE]  DEFAULT (getdate()) FOR [SST_CRDATE]
GO
ALTER TABLE [dbo].[TB_USER] ADD  CONSTRAINT [DF_TB_USER_USR_CRDATE]  DEFAULT (getdate()) FOR [USR_CRDATE]
GO
ALTER TABLE [dbo].[TB_USER] ADD  CONSTRAINT [DF_TB_USER_USR_MODDATE]  DEFAULT (getdate()) FOR [USR_MODDATE]
GO
ALTER TABLE [dbo].[TB_USER] ADD  CONSTRAINT [DF_TB_USER_USR_CRUSER]  DEFAULT ((0)) FOR [USR_CRUSER]
GO
ALTER TABLE [dbo].[TB_USER] ADD  CONSTRAINT [DF_TB_USER_USR_MODUSER]  DEFAULT ((0)) FOR [USR_MODUSER]
GO
ALTER TABLE [dbo].[TB_USER] ADD  CONSTRAINT [DF_TB_USER_USR_ISADMIN]  DEFAULT ((1)) FOR [USR_ROLE_FK]
GO
ALTER TABLE [dbo].[TB_USER] ADD  CONSTRAINT [DF_TB_USER_USR_PRICEROLE_FK]  DEFAULT ((0)) FOR [USR_PRICEROLE_FK]
GO
ALTER TABLE [dbo].[TB_USER] ADD  CONSTRAINT [DF_TB_USER_USR_ENABLED]  DEFAULT ((1)) FOR [USR_ENABLED]
GO
ALTER TABLE [dbo].[TB_USER] ADD  CONSTRAINT [DF_TB_USER_USR_LANGUAGE]  DEFAULT ((1)) FOR [USR_LANGUAGE_FK]
GO
ALTER TABLE [dbo].[TB_USER] ADD  CONSTRAINT [DF_TB_USER_USR_PRICETO]  DEFAULT ((-1)) FOR [USR_PRICETO]
GO
ALTER TABLE [dbo].[TB_USER_COUNTRY] ADD  CONSTRAINT [DF_Table_1_URR_CRDATE_1]  DEFAULT (getdate()) FOR [URC_CRDATE]
GO
ALTER TABLE [dbo].[TB_USER_COUNTRY] ADD  CONSTRAINT [DF_Table_1_URR_MODDATE_1]  DEFAULT (getdate()) FOR [URC_MODDATE]
GO
ALTER TABLE [dbo].[TB_USER_COUNTRY] ADD  CONSTRAINT [DF_Table_1_URR_CRUSER_1]  DEFAULT ((0)) FOR [URC_CRUSER]
GO
ALTER TABLE [dbo].[TB_USER_COUNTRY] ADD  CONSTRAINT [DF_Table_1_URR_MODUSER_1]  DEFAULT ((0)) FOR [URC_MODUSER]
GO
ALTER TABLE [dbo].[TB_USER_COUNTRY] ADD  CONSTRAINT [DF_TB_USER_COUNTRY_URC_OPEN]  DEFAULT ((0)) FOR [URC_OPEN]
GO
ALTER TABLE [dbo].[TB_USER_DEFECT] ADD  CONSTRAINT [DF_TB_USER_DEFECT_URD_CRDATE]  DEFAULT (getdate()) FOR [URD_CRDATE]
GO
ALTER TABLE [dbo].[TB_USER_DEFECT] ADD  CONSTRAINT [DF_TB_USER_DEFECT_URD_MODDATE]  DEFAULT (getdate()) FOR [URD_MODDATE]
GO
ALTER TABLE [dbo].[TB_USER_DEFECT] ADD  CONSTRAINT [DF_TB_USER_DEFECT_URD_CRUSER]  DEFAULT ((0)) FOR [URD_CRUSER]
GO
ALTER TABLE [dbo].[TB_USER_DEFECT] ADD  CONSTRAINT [DF_TB_USER_DEFECT_URD_MODUSER]  DEFAULT ((0)) FOR [URD_MODUSER]
GO
ALTER TABLE [dbo].[TB_USER_ENTITY] ADD  CONSTRAINT [DF_TB_USER_ENTITY_URE_CRDATE]  DEFAULT (getdate()) FOR [URE_CRDATE]
GO
ALTER TABLE [dbo].[TB_USER_ENTITY] ADD  CONSTRAINT [DF_TB_USER_ENTITY_URE_MODDATE]  DEFAULT (getdate()) FOR [URE_MODDATE]
GO
ALTER TABLE [dbo].[TB_USER_ENTITY] ADD  CONSTRAINT [DF_TB_USER_ENTITY_URE_CRUSER]  DEFAULT ((0)) FOR [URE_CRUSER]
GO
ALTER TABLE [dbo].[TB_USER_ENTITY] ADD  CONSTRAINT [DF_TB_USER_ENTITY_URE_MODUSER]  DEFAULT ((0)) FOR [URE_MODUSER]
GO
ALTER TABLE [dbo].[TB_USER_PRICEROLE] ADD  CONSTRAINT [DF_TB_USER_PRICEROLE_UPR_CRDATE]  DEFAULT (getdate()) FOR [UPR_CRDATE]
GO
ALTER TABLE [dbo].[TB_USER_PRICEROLE] ADD  CONSTRAINT [DF_TB_USER_PRICEROLE_UPR_MODDATE]  DEFAULT (getdate()) FOR [UPR_MODDATE]
GO
ALTER TABLE [dbo].[TB_USER_PRICEROLE] ADD  CONSTRAINT [DF_TB_USER_PRICEROLE_UPR_CRUSER]  DEFAULT (0) FOR [UPR_CRUSER]
GO
ALTER TABLE [dbo].[TB_USER_PRICEROLE] ADD  CONSTRAINT [DF_TB_USER_PRICEROLE_UPR_MODUSER]  DEFAULT (0) FOR [UPR_MODUSER]
GO
ALTER TABLE [dbo].[TB_USER_PRICEROLE] ADD  CONSTRAINT [DF_TB_USER_PRICEROLE_UPR_PEOPLECOUNT]  DEFAULT (1) FOR [UPR_PEOPLECOUNT]
GO
ALTER TABLE [dbo].[TB_USER_ROLE] ADD  CONSTRAINT [DF_TB_USER_ROLE_URR_CRDATE]  DEFAULT (getdate()) FOR [URR_CRDATE]
GO
ALTER TABLE [dbo].[TB_USER_ROLE] ADD  CONSTRAINT [DF_TB_USER_ROLE_URR_MODDATE]  DEFAULT (getdate()) FOR [URR_MODDATE]
GO
ALTER TABLE [dbo].[TB_USER_ROLE] ADD  CONSTRAINT [DF_TB_USER_ROLE_URR_CRUSER]  DEFAULT (0) FOR [URR_CRUSER]
GO
ALTER TABLE [dbo].[TB_USER_ROLE] ADD  CONSTRAINT [DF_TB_USER_ROLE_URR_MODUSER]  DEFAULT (0) FOR [URR_MODUSER]
GO
ALTER TABLE [dbo].[TB_USER_ROLENEW] ADD  CONSTRAINT [DF_Table_1_URR_CRDATE]  DEFAULT (getdate()) FOR [URN_CRDATE]
GO
ALTER TABLE [dbo].[TB_USER_ROLENEW] ADD  CONSTRAINT [DF_Table_1_URR_MODDATE]  DEFAULT (getdate()) FOR [URN_MODDATE]
GO
ALTER TABLE [dbo].[TB_USER_ROLENEW] ADD  CONSTRAINT [DF_Table_1_URR_CRUSER]  DEFAULT ((0)) FOR [URN_CRUSER]
GO
ALTER TABLE [dbo].[TB_USER_ROLENEW] ADD  CONSTRAINT [DF_Table_1_URR_MODUSER]  DEFAULT ((0)) FOR [URN_MODUSER]
GO
ALTER TABLE [dbo].[TB_USER_ROLENEW] ADD  CONSTRAINT [DF_TB_USER_ROLENEW_URN_ISSTATE]  DEFAULT ((1)) FOR [URN_ISSTATE]
GO
ALTER TABLE [dbo].[TB_USER_ROLENEW] ADD  CONSTRAINT [DF_TB_USER_ROLENEW_URN_ISROLE]  DEFAULT ((1)) FOR [URN_ISROLE]
GO
ALTER TABLE [dbo].[TB_USER_ROLENEW] ADD  CONSTRAINT [DF_TB_USER_ROLENEW_URN_ISSTATEOLD]  DEFAULT ((0)) FOR [URN_ISSTATEOLD]
GO
ALTER TABLE [dbo].[TB_USER_ROLENEW_ASSIGN] ADD  CONSTRAINT [DF_Table_1_URN_CRDATE]  DEFAULT (getdate()) FOR [URA_CRDATE]
GO
ALTER TABLE [dbo].[TB_USER_ROLENEW_ASSIGN] ADD  CONSTRAINT [DF_Table_1_URN_MODDATE]  DEFAULT (getdate()) FOR [URA_MODDATE]
GO
ALTER TABLE [dbo].[TB_USER_ROLENEW_ASSIGN] ADD  CONSTRAINT [DF_Table_1_URN_CRUSER]  DEFAULT ((0)) FOR [URA_CRUSER]
GO
ALTER TABLE [dbo].[TB_USER_ROLENEW_ASSIGN] ADD  CONSTRAINT [DF_Table_1_URN_MODUSER]  DEFAULT ((0)) FOR [URA_MODUSER]
GO
ALTER TABLE [dbo].[TB_ADDRESS_NEW]  WITH CHECK ADD  CONSTRAINT [FK_TB_ADDRESS_NEW_TB_ADDRESS_TYPE] FOREIGN KEY([ADR_IMPORTTYPE])
REFERENCES [dbo].[TB_ADDRESS_TYPE] ([ADT_ID])
GO
ALTER TABLE [dbo].[TB_ADDRESS_NEW] CHECK CONSTRAINT [FK_TB_ADDRESS_NEW_TB_ADDRESS_TYPE]
GO
ALTER TABLE [dbo].[TB_COMPLAINT]  WITH NOCHECK ADD  CONSTRAINT [FK_TB_COMPLAINT_TB_COMPLAINT] FOREIGN KEY([COM_EXTEND])
REFERENCES [dbo].[TB_COMPLAINT] ([COM_ID])
GO
ALTER TABLE [dbo].[TB_COMPLAINT] CHECK CONSTRAINT [FK_TB_COMPLAINT_TB_COMPLAINT]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_CALCULATION]  WITH NOCHECK ADD  CONSTRAINT [FK_TB_COMPLAINT_CALCULATION_TB_COMPLAINT] FOREIGN KEY([CCA_COMPLAINT_FK])
REFERENCES [dbo].[TB_COMPLAINT] ([COM_ID])
GO
ALTER TABLE [dbo].[TB_COMPLAINT_CALCULATION] CHECK CONSTRAINT [FK_TB_COMPLAINT_CALCULATION_TB_COMPLAINT]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_CALCULATION]  WITH NOCHECK ADD  CONSTRAINT [FK_TB_COMPLAINT_CALCULATION_TB_COMPLAINT_CALCULATION_TYPE] FOREIGN KEY([CCA_TYPE_FK])
REFERENCES [dbo].[TB_COMPLAINT_CALCULATION_TYPE] ([CCT_ID])
GO
ALTER TABLE [dbo].[TB_COMPLAINT_CALCULATION] CHECK CONSTRAINT [FK_TB_COMPLAINT_CALCULATION_TB_COMPLAINT_CALCULATION_TYPE]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_CALCULATION_NOTE]  WITH NOCHECK ADD  CONSTRAINT [FK_TB_COMPLAINT_CALCULATION_NOTE_TB_COMPLAINT] FOREIGN KEY([CCN_COMPLAINT_FK])
REFERENCES [dbo].[TB_COMPLAINT] ([COM_ID])
GO
ALTER TABLE [dbo].[TB_COMPLAINT_CALCULATION_NOTE] CHECK CONSTRAINT [FK_TB_COMPLAINT_CALCULATION_NOTE_TB_COMPLAINT]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_CALCULATION_NOTE]  WITH NOCHECK ADD  CONSTRAINT [FK_TB_COMPLAINT_CALCULATION_NOTE_TB_COMPLAINT_CALCULATION_TYPE] FOREIGN KEY([CCN_TYPE_FK])
REFERENCES [dbo].[TB_COMPLAINT_CALCULATION_TYPE] ([CCT_ID])
GO
ALTER TABLE [dbo].[TB_COMPLAINT_CALCULATION_NOTE] CHECK CONSTRAINT [FK_TB_COMPLAINT_CALCULATION_NOTE_TB_COMPLAINT_CALCULATION_TYPE]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_CALCULATION_REAL]  WITH NOCHECK ADD  CONSTRAINT [FK_TB_COMPLAINT_CALCULATION_REAL_TB_COMPLAINT] FOREIGN KEY([CCR_COMPLAINT_FK])
REFERENCES [dbo].[TB_COMPLAINT] ([COM_ID])
GO
ALTER TABLE [dbo].[TB_COMPLAINT_CALCULATION_REAL] CHECK CONSTRAINT [FK_TB_COMPLAINT_CALCULATION_REAL_TB_COMPLAINT]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_CALCULATION_REAL]  WITH CHECK ADD  CONSTRAINT [FK_TB_COMPLAINT_CALCULATION_REAL_TB_COMPLAINT_CALCULATION_TYPE] FOREIGN KEY([CCR_TYPE_FK])
REFERENCES [dbo].[TB_COMPLAINT_CALCULATION_TYPE] ([CCT_ID])
GO
ALTER TABLE [dbo].[TB_COMPLAINT_CALCULATION_REAL] CHECK CONSTRAINT [FK_TB_COMPLAINT_CALCULATION_REAL_TB_COMPLAINT_CALCULATION_TYPE]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_DOCUMENT]  WITH NOCHECK ADD  CONSTRAINT [FK_TB_COMPLAINT_DOCUMENT_TB_COMPLAINT] FOREIGN KEY([COD_COMPLAINT_FK])
REFERENCES [dbo].[TB_COMPLAINT] ([COM_ID])
GO
ALTER TABLE [dbo].[TB_COMPLAINT_DOCUMENT] CHECK CONSTRAINT [FK_TB_COMPLAINT_DOCUMENT_TB_COMPLAINT]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_DOCUMENT]  WITH CHECK ADD  CONSTRAINT [FK_TB_COMPLAINT_DOCUMENT_TB_COMPLAINT_DOCUMENT_TYPE] FOREIGN KEY([COD_TYPE_FK])
REFERENCES [dbo].[TB_COMPLAINT_DOCUMENT_TYPE] ([CDT_ID])
GO
ALTER TABLE [dbo].[TB_COMPLAINT_DOCUMENT] CHECK CONSTRAINT [FK_TB_COMPLAINT_DOCUMENT_TB_COMPLAINT_DOCUMENT_TYPE]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_EXPEDICION_REAL]  WITH NOCHECK ADD  CONSTRAINT [FK_TB_COMPLAINT_EXPEDICION_REAL_TB_COMPLAINT] FOREIGN KEY([CER_COMPLAINT_FK])
REFERENCES [dbo].[TB_COMPLAINT] ([COM_ID])
GO
ALTER TABLE [dbo].[TB_COMPLAINT_EXPEDICION_REAL] CHECK CONSTRAINT [FK_TB_COMPLAINT_EXPEDICION_REAL_TB_COMPLAINT]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_EXPEDICION_REAL]  WITH CHECK ADD  CONSTRAINT [FK_TB_COMPLAINT_EXPEDICION_REAL_TB_COMPLAINT_EXPEDICION_TYPE] FOREIGN KEY([CER_TYPE_FK])
REFERENCES [dbo].[TB_COMPLAINT_EXPEDICION_TYPE] ([CET_ID])
GO
ALTER TABLE [dbo].[TB_COMPLAINT_EXPEDICION_REAL] CHECK CONSTRAINT [FK_TB_COMPLAINT_EXPEDICION_REAL_TB_COMPLAINT_EXPEDICION_TYPE]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_INDEMNIFICATION]  WITH NOCHECK ADD  CONSTRAINT [FK_TB_COMPLAINT_INDEMNIFICATION_TB_COMPLAINT] FOREIGN KEY([COP_COMPLAINT_FK])
REFERENCES [dbo].[TB_COMPLAINT] ([COM_ID])
GO
ALTER TABLE [dbo].[TB_COMPLAINT_INDEMNIFICATION] CHECK CONSTRAINT [FK_TB_COMPLAINT_INDEMNIFICATION_TB_COMPLAINT]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_PRODUCT]  WITH NOCHECK ADD  CONSTRAINT [FK_TB_COMPLAINT_PRODUCT_TB_COMPLAINT] FOREIGN KEY([COP_COMPLAINT_FK])
REFERENCES [dbo].[TB_COMPLAINT] ([COM_ID])
GO
ALTER TABLE [dbo].[TB_COMPLAINT_PRODUCT] CHECK CONSTRAINT [FK_TB_COMPLAINT_PRODUCT_TB_COMPLAINT]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_STATE]  WITH NOCHECK ADD  CONSTRAINT [FK_TB_COMPLAINT_STATE_TB_COMPLAINT] FOREIGN KEY([COS_COMPLAINT_FK])
REFERENCES [dbo].[TB_COMPLAINT] ([COM_ID])
GO
ALTER TABLE [dbo].[TB_COMPLAINT_STATE] CHECK CONSTRAINT [FK_TB_COMPLAINT_STATE_TB_COMPLAINT]
GO
ALTER TABLE [dbo].[TB_COMPLAINT_STATE]  WITH NOCHECK ADD  CONSTRAINT [FK_TB_COMPLAINT_STATE_TB_USER] FOREIGN KEY([COS_PERSON_FK])
REFERENCES [dbo].[TB_USER] ([USR_ID])
GO
ALTER TABLE [dbo].[TB_COMPLAINT_STATE] CHECK CONSTRAINT [FK_TB_COMPLAINT_STATE_TB_USER]
GO
ALTER TABLE [dbo].[TB_DOCUMENT_TEMPLATE]  WITH CHECK ADD  CONSTRAINT [FK_TB_DOCUMENT_TEMPLATE_TB_COMPLAINT_DOCUMENT_TYPE] FOREIGN KEY([DOT_TYPE_FK])
REFERENCES [dbo].[TB_COMPLAINT_DOCUMENT_TYPE] ([CDT_ID])
GO
ALTER TABLE [dbo].[TB_DOCUMENT_TEMPLATE] CHECK CONSTRAINT [FK_TB_DOCUMENT_TEMPLATE_TB_COMPLAINT_DOCUMENT_TYPE]
GO
ALTER TABLE [dbo].[TB_ITEM]  WITH NOCHECK ADD  CONSTRAINT [FK_TB_ITEM_TB_ITEM_TYPE] FOREIGN KEY([ITM_TYPE_FK], [ITM_LANGUAGE_FK])
REFERENCES [dbo].[TB_ITEM_TYPE] ([ITT_ID], [ITT_LANGUAGE_FK])
GO
ALTER TABLE [dbo].[TB_ITEM] CHECK CONSTRAINT [FK_TB_ITEM_TB_ITEM_TYPE]
GO
ALTER TABLE [dbo].[TB_ITEM]  WITH NOCHECK ADD  CONSTRAINT [FK_TB_ITEM_TB_LANGUAGE] FOREIGN KEY([ITM_LANGUAGE_FK])
REFERENCES [dbo].[TB_LANGUAGE] ([LAN_ID])
GO
ALTER TABLE [dbo].[TB_ITEM] CHECK CONSTRAINT [FK_TB_ITEM_TB_LANGUAGE]
GO
ALTER TABLE [dbo].[TB_ITEM_TYPE]  WITH CHECK ADD  CONSTRAINT [FK_TB_ITEM_TYPE_TB_LANGUAGE] FOREIGN KEY([ITT_LANGUAGE_FK])
REFERENCES [dbo].[TB_LANGUAGE] ([LAN_ID])
GO
ALTER TABLE [dbo].[TB_ITEM_TYPE] CHECK CONSTRAINT [FK_TB_ITEM_TYPE_TB_LANGUAGE]
GO
ALTER TABLE [dbo].[TB_LABEL]  WITH CHECK ADD  CONSTRAINT [FK_TB_LABEL_TB_LANGUAGE] FOREIGN KEY([LBL_LANGUAGE_FK])
REFERENCES [dbo].[TB_LANGUAGE] ([LAN_ID])
GO
ALTER TABLE [dbo].[TB_LABEL] CHECK CONSTRAINT [FK_TB_LABEL_TB_LANGUAGE]
GO
ALTER TABLE [dbo].[TB_PRODUCT_PRICE]  WITH CHECK ADD  CONSTRAINT [FK_TB_PRODUCT_PRICE_TB_PRODUCT] FOREIGN KEY([PRP_PRODUCT_FK])
REFERENCES [dbo].[TB_PRODUCT] ([PRO_ID])
GO
ALTER TABLE [dbo].[TB_PRODUCT_PRICE] CHECK CONSTRAINT [FK_TB_PRODUCT_PRICE_TB_PRODUCT]
GO
ALTER TABLE [dbo].[TB_REGION]  WITH NOCHECK ADD  CONSTRAINT [FK_TB_REGION_TB_USER] FOREIGN KEY([REG_USER_TECH])
REFERENCES [dbo].[TB_USER] ([USR_ID])
GO
ALTER TABLE [dbo].[TB_REGION] CHECK CONSTRAINT [FK_TB_REGION_TB_USER]
GO
ALTER TABLE [dbo].[TB_REGION]  WITH NOCHECK ADD  CONSTRAINT [FK_TB_REGION_TB_USER1] FOREIGN KEY([REG_USER_MAN])
REFERENCES [dbo].[TB_USER] ([USR_ID])
GO
ALTER TABLE [dbo].[TB_REGION] CHECK CONSTRAINT [FK_TB_REGION_TB_USER1]
GO
ALTER TABLE [dbo].[TB_STAT_CATEGORY_FILE]  WITH CHECK ADD  CONSTRAINT [FK_TB_STAT_CATEGORY_FILE_TB_STAT_CATEGORY] FOREIGN KEY([SCF_CATEGORY_FK])
REFERENCES [dbo].[TB_STAT_CATEGORY] ([STC_ID])
GO
ALTER TABLE [dbo].[TB_STAT_CATEGORY_FILE] CHECK CONSTRAINT [FK_TB_STAT_CATEGORY_FILE_TB_STAT_CATEGORY]
GO
ALTER TABLE [dbo].[TB_STAT_CATEGORY_FILE_TEXT]  WITH CHECK ADD  CONSTRAINT [FK_TB_STAT_CATEGORY_FILE_TEXT_TB_LANGUAGE] FOREIGN KEY([SFT_LANGUAGE_FK])
REFERENCES [dbo].[TB_LANGUAGE] ([LAN_ID])
GO
ALTER TABLE [dbo].[TB_STAT_CATEGORY_FILE_TEXT] CHECK CONSTRAINT [FK_TB_STAT_CATEGORY_FILE_TEXT_TB_LANGUAGE]
GO
ALTER TABLE [dbo].[TB_STAT_CATEGORY_FILE_TEXT]  WITH CHECK ADD  CONSTRAINT [FK_TB_STAT_CATEGORY_FILE_TEXT_TB_STAT_CATEGORY_FILE] FOREIGN KEY([SFT_FILE_FK])
REFERENCES [dbo].[TB_STAT_CATEGORY_FILE] ([SCF_ID])
GO
ALTER TABLE [dbo].[TB_STAT_CATEGORY_FILE_TEXT] CHECK CONSTRAINT [FK_TB_STAT_CATEGORY_FILE_TEXT_TB_STAT_CATEGORY_FILE]
GO
ALTER TABLE [dbo].[TB_STAT_CATEGORY_TEXT]  WITH CHECK ADD  CONSTRAINT [FK_TB_STAT_CATEGORY_TEXT_TB_LANGUAGE] FOREIGN KEY([SCT_LANGUAGE_FK])
REFERENCES [dbo].[TB_LANGUAGE] ([LAN_ID])
GO
ALTER TABLE [dbo].[TB_STAT_CATEGORY_TEXT] CHECK CONSTRAINT [FK_TB_STAT_CATEGORY_TEXT_TB_LANGUAGE]
GO
ALTER TABLE [dbo].[TB_STAT_CATEGORY_TEXT]  WITH CHECK ADD  CONSTRAINT [FK_TB_STAT_CATEGORY_TEXT_TB_STAT_CATEGORY] FOREIGN KEY([SCT_CATEGORY_FK])
REFERENCES [dbo].[TB_STAT_CATEGORY] ([STC_ID])
GO
ALTER TABLE [dbo].[TB_STAT_CATEGORY_TEXT] CHECK CONSTRAINT [FK_TB_STAT_CATEGORY_TEXT_TB_STAT_CATEGORY]
GO
ALTER TABLE [dbo].[TB_STAT_STATE]  WITH NOCHECK ADD  CONSTRAINT [FK_TB_STAT_STATE_TB_COMPLAINT] FOREIGN KEY([SST_COMPLAINT_FK])
REFERENCES [dbo].[TB_COMPLAINT] ([COM_ID])
GO
ALTER TABLE [dbo].[TB_STAT_STATE] CHECK CONSTRAINT [FK_TB_STAT_STATE_TB_COMPLAINT]
GO
ALTER TABLE [dbo].[TB_STAT_STATE_WEEK]  WITH NOCHECK ADD  CONSTRAINT [FK_TB_STAT_STATE_WEEK_TB_COMPLAINT] FOREIGN KEY([SSW_COMPLAINT_FK])
REFERENCES [dbo].[TB_COMPLAINT] ([COM_ID])
GO
ALTER TABLE [dbo].[TB_STAT_STATE_WEEK] CHECK CONSTRAINT [FK_TB_STAT_STATE_WEEK_TB_COMPLAINT]
GO
ALTER TABLE [dbo].[TB_TIME]  WITH CHECK ADD  CONSTRAINT [FK_TB_TIME_TB_TIME_TYPE] FOREIGN KEY([TIM_TYPE_FK])
REFERENCES [dbo].[TB_TIME_TYPE] ([TIT_ID])
GO
ALTER TABLE [dbo].[TB_TIME] CHECK CONSTRAINT [FK_TB_TIME_TB_TIME_TYPE]
GO
ALTER TABLE [dbo].[TB_USER]  WITH NOCHECK ADD  CONSTRAINT [FK_TB_USER_TB_LANGUAGE] FOREIGN KEY([USR_LANGUAGE_FK])
REFERENCES [dbo].[TB_LANGUAGE] ([LAN_ID])
GO
ALTER TABLE [dbo].[TB_USER] CHECK CONSTRAINT [FK_TB_USER_TB_LANGUAGE]
GO
ALTER TABLE [dbo].[TB_USER]  WITH NOCHECK ADD  CONSTRAINT [FK_TB_USER_TB_USER_PRICEROLE] FOREIGN KEY([USR_PRICEROLE_FK])
REFERENCES [dbo].[TB_USER_PRICEROLE] ([UPR_ID])
GO
ALTER TABLE [dbo].[TB_USER] CHECK CONSTRAINT [FK_TB_USER_TB_USER_PRICEROLE]
GO
ALTER TABLE [dbo].[TB_USER]  WITH NOCHECK ADD  CONSTRAINT [FK_TB_USER_TB_USER_ROLE] FOREIGN KEY([USR_ROLE_FK])
REFERENCES [dbo].[TB_USER_ROLE] ([URR_ID])
GO
ALTER TABLE [dbo].[TB_USER] CHECK CONSTRAINT [FK_TB_USER_TB_USER_ROLE]
GO
ALTER TABLE [dbo].[TB_USER_COUNTRY]  WITH CHECK ADD  CONSTRAINT [FK_TB_USER_COUNTRY_TB_USER] FOREIGN KEY([URC_USER_FK])
REFERENCES [dbo].[TB_USER] ([USR_ID])
GO
ALTER TABLE [dbo].[TB_USER_COUNTRY] CHECK CONSTRAINT [FK_TB_USER_COUNTRY_TB_USER]
GO
ALTER TABLE [dbo].[TB_USER_DEFECT]  WITH CHECK ADD  CONSTRAINT [FK_TB_USER_DEFECT_TB_USER_DEFECT] FOREIGN KEY([URD_USER_FK])
REFERENCES [dbo].[TB_USER] ([USR_ID])
GO
ALTER TABLE [dbo].[TB_USER_DEFECT] CHECK CONSTRAINT [FK_TB_USER_DEFECT_TB_USER_DEFECT]
GO
ALTER TABLE [dbo].[TB_USER_ENTITY]  WITH CHECK ADD  CONSTRAINT [FK_TB_USER_ENTITY_TB_USER] FOREIGN KEY([URE_USER_FK])
REFERENCES [dbo].[TB_USER] ([USR_ID])
GO
ALTER TABLE [dbo].[TB_USER_ENTITY] CHECK CONSTRAINT [FK_TB_USER_ENTITY_TB_USER]
GO
ALTER TABLE [dbo].[TB_USER_ROLENEW_ASSIGN]  WITH CHECK ADD  CONSTRAINT [FK_TB_USER_ROLENEW_ASSIGN_TB_USER] FOREIGN KEY([URA_USER_FK])
REFERENCES [dbo].[TB_USER] ([USR_ID])
GO
ALTER TABLE [dbo].[TB_USER_ROLENEW_ASSIGN] CHECK CONSTRAINT [FK_TB_USER_ROLENEW_ASSIGN_TB_USER]
GO
ALTER TABLE [dbo].[TB_USER_ROLENEW_ASSIGN]  WITH CHECK ADD  CONSTRAINT [FK_TB_USER_ROLENEW_ASSIGN_TB_USER_ROLENEW] FOREIGN KEY([URA_ROLENEW_FK])
REFERENCES [dbo].[TB_USER_ROLENEW] ([URN_ID])
GO
ALTER TABLE [dbo].[TB_USER_ROLENEW_ASSIGN] CHECK CONSTRAINT [FK_TB_USER_ROLENEW_ASSIGN_TB_USER_ROLENEW]
GO
/****** Object:  StoredProcedure [dbo].[dt_addtosourcecontrol]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER OFF
GO
create proc [dbo].[dt_addtosourcecontrol]
    @vchSourceSafeINI varchar(255) = '',
    @vchProjectName   varchar(255) ='',
    @vchComment       varchar(255) ='',
    @vchLoginName     varchar(255) ='',
    @vchPassword      varchar(255) =''

as

set nocount on

declare @iReturn int
declare @iObjectId int
select @iObjectId = 0

declare @iStreamObjectId int
select @iStreamObjectId = 0

declare @VSSGUID varchar(100)
select @VSSGUID = 'SQLVersionControl.VCS_SQL'

declare @vchDatabaseName varchar(255)
select @vchDatabaseName = db_name()

declare @iReturnValue int
select @iReturnValue = 0

declare @iPropertyObjectId int
declare @vchParentId varchar(255)

declare @iObjectCount int
select @iObjectCount = 0

    exec @iReturn = master.dbo.sp_OACreate @VSSGUID, @iObjectId OUT
    if @iReturn <> 0 GOTO E_OAError


    /* Create Project in SS */
    exec @iReturn = master.dbo.sp_OAMethod @iObjectId,
											'AddProjectToSourceSafe',
											NULL,
											@vchSourceSafeINI,
											@vchProjectName output,
											@@SERVERNAME,
											@vchDatabaseName,
											@vchLoginName,
											@vchPassword,
											@vchComment


    if @iReturn <> 0 GOTO E_OAError

    /* Set Database Properties */

    begin tran SetProperties

    /* add high level object */

    exec @iPropertyObjectId = dbo.dt_adduserobject_vcs 'VCSProjectID'

    select @vchParentId = CONVERT(varchar(255),@iPropertyObjectId)

    exec dbo.dt_setpropertybyid @iPropertyObjectId, 'VCSProjectID', @vchParentId , NULL
    exec dbo.dt_setpropertybyid @iPropertyObjectId, 'VCSProject' , @vchProjectName , NULL
    exec dbo.dt_setpropertybyid @iPropertyObjectId, 'VCSSourceSafeINI' , @vchSourceSafeINI , NULL
    exec dbo.dt_setpropertybyid @iPropertyObjectId, 'VCSSQLServer', @@SERVERNAME, NULL
    exec dbo.dt_setpropertybyid @iPropertyObjectId, 'VCSSQLDatabase', @vchDatabaseName, NULL

    if @@error <> 0 GOTO E_General_Error

    commit tran SetProperties
    
    select @iObjectCount = 0;

CleanUp:
    select @vchProjectName
    select @iObjectCount
    return

E_General_Error:
    /* this is an all or nothing.  No specific error messages */
    goto CleanUp

E_OAError:
    exec dbo.dt_displayoaerror @iObjectId, @iReturn
    goto CleanUp


GO
/****** Object:  StoredProcedure [dbo].[dt_addtosourcecontrol_u]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER OFF
GO
create proc [dbo].[dt_addtosourcecontrol_u]
    @vchSourceSafeINI nvarchar(255) = '',
    @vchProjectName   nvarchar(255) ='',
    @vchComment       nvarchar(255) ='',
    @vchLoginName     nvarchar(255) ='',
    @vchPassword      nvarchar(255) =''

as
	-- This procedure should no longer be called;  dt_addtosourcecontrol should be called instead.
	-- Calls are forwarded to dt_addtosourcecontrol to maintain backward compatibility
	set nocount on
	exec dbo.dt_addtosourcecontrol 
		@vchSourceSafeINI, 
		@vchProjectName, 
		@vchComment, 
		@vchLoginName, 
		@vchPassword


GO
/****** Object:  StoredProcedure [dbo].[dt_adduserobject]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER OFF
GO
/*
**	Add an object to the dtproperties table
*/
create procedure [dbo].[dt_adduserobject]
as
	set nocount on
	/*
	** Create the user object if it does not exist already
	*/
	begin transaction
		insert dbo.dtproperties (property) VALUES ('DtgSchemaOBJECT')
		update dbo.dtproperties set objectid=@@identity 
			where id=@@identity and property='DtgSchemaOBJECT'
	commit
	return @@identity
GO
/****** Object:  StoredProcedure [dbo].[dt_adduserobject_vcs]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER OFF
GO
create procedure [dbo].[dt_adduserobject_vcs]
    @vchProperty varchar(64)

as

set nocount on

declare @iReturn int
    /*
    ** Create the user object if it does not exist already
    */
    begin transaction
        select @iReturn = objectid from dbo.dtproperties where property = @vchProperty
        if @iReturn IS NULL
        begin
            insert dbo.dtproperties (property) VALUES (@vchProperty)
            update dbo.dtproperties set objectid=@@identity
                    where id=@@identity and property=@vchProperty
            select @iReturn = @@identity
        end
    commit
    return @iReturn


GO
/****** Object:  StoredProcedure [dbo].[dt_displayoaerror]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[dt_displayoaerror]
    @iObject int,
    @iresult int
as

set nocount on

declare @vchOutput      varchar(255)
declare @hr             int
declare @vchSource      varchar(255)
declare @vchDescription varchar(255)

    exec @hr = master.dbo.sp_OAGetErrorInfo @iObject, @vchSource OUT, @vchDescription OUT

    select @vchOutput = @vchSource + ': ' + @vchDescription
    raiserror (@vchOutput,16,-1)

    return

GO
/****** Object:  StoredProcedure [dbo].[dt_displayoaerror_u]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[dt_displayoaerror_u]
    @iObject int,
    @iresult int
as
	-- This procedure should no longer be called;  dt_displayoaerror should be called instead.
	-- Calls are forwarded to dt_displayoaerror to maintain backward compatibility.
	set nocount on
	exec dbo.dt_displayoaerror
		@iObject,
		@iresult


GO
/****** Object:  StoredProcedure [dbo].[dt_droppropertiesbyid]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER OFF
GO
/*
**	Drop one or all the associated properties of an object or an attribute 
**
**	dt_dropproperties objid, null or '' -- drop all properties of the object itself
**	dt_dropproperties objid, property -- drop the property
*/
create procedure [dbo].[dt_droppropertiesbyid]
	@id int,
	@property varchar(64)
as
	set nocount on

	if (@property is null) or (@property = '')
		delete from dbo.dtproperties where objectid=@id
	else
		delete from dbo.dtproperties 
			where objectid=@id and property=@property

GO
/****** Object:  StoredProcedure [dbo].[dt_dropuserobjectbyid]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER OFF
GO
/*
**	Drop an object from the dbo.dtproperties table
*/
create procedure [dbo].[dt_dropuserobjectbyid]
	@id int
as
	set nocount on
	delete from dbo.dtproperties where objectid=@id
GO
/****** Object:  StoredProcedure [dbo].[dt_generateansiname]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER OFF
GO
/* 
**	Generate an ansi name that is unique in the dtproperties.value column 
*/ 
create procedure [dbo].[dt_generateansiname](@name varchar(255) output) 
as 
	declare @prologue varchar(20) 
	declare @indexstring varchar(20) 
	declare @index integer 
 
	set @prologue = 'MSDT-A-' 
	set @index = 1 
 
	while 1 = 1 
	begin 
		set @indexstring = cast(@index as varchar(20)) 
		set @name = @prologue + @indexstring 
		if not exists (select value from dtproperties where value = @name) 
			break 
		 
		set @index = @index + 1 
 
		if (@index = 10000) 
			goto TooMany 
	end 
 
Leave: 
 
	return 
 
TooMany: 
 
	set @name = 'DIAGRAM' 
	goto Leave 
GO
/****** Object:  StoredProcedure [dbo].[dt_getobjwithprop]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER OFF
GO
/*
**	Retrieve the owner object(s) of a given property
*/
create procedure [dbo].[dt_getobjwithprop]
	@property varchar(30),
	@value varchar(255)
as
	set nocount on

	if (@property is null) or (@property = '')
	begin
		raiserror('Must specify a property name.',-1,-1)
		return (1)
	end

	if (@value is null)
		select objectid id from dbo.dtproperties
			where property=@property

	else
		select objectid id from dbo.dtproperties
			where property=@property and value=@value
GO
/****** Object:  StoredProcedure [dbo].[dt_getobjwithprop_u]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER OFF
GO
/*
**	Retrieve the owner object(s) of a given property
*/
create procedure [dbo].[dt_getobjwithprop_u]
	@property varchar(30),
	@uvalue nvarchar(255)
as
	set nocount on

	if (@property is null) or (@property = '')
	begin
		raiserror('Must specify a property name.',-1,-1)
		return (1)
	end

	if (@uvalue is null)
		select objectid id from dbo.dtproperties
			where property=@property

	else
		select objectid id from dbo.dtproperties
			where property=@property and uvalue=@uvalue
GO
/****** Object:  StoredProcedure [dbo].[dt_getpropertiesbyid]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER OFF
GO
/*
**	Retrieve properties by id's
**
**	dt_getproperties objid, null or '' -- retrieve all properties of the object itself
**	dt_getproperties objid, property -- retrieve the property specified
*/
create procedure [dbo].[dt_getpropertiesbyid]
	@id int,
	@property varchar(64)
as
	set nocount on

	if (@property is null) or (@property = '')
		select property, version, value, lvalue
			from dbo.dtproperties
			where  @id=objectid
	else
		select property, version, value, lvalue
			from dbo.dtproperties
			where  @id=objectid and @property=property
GO
/****** Object:  StoredProcedure [dbo].[dt_getpropertiesbyid_u]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER OFF
GO
/*
**	Retrieve properties by id's
**
**	dt_getproperties objid, null or '' -- retrieve all properties of the object itself
**	dt_getproperties objid, property -- retrieve the property specified
*/
create procedure [dbo].[dt_getpropertiesbyid_u]
	@id int,
	@property varchar(64)
as
	set nocount on

	if (@property is null) or (@property = '')
		select property, version, uvalue, lvalue
			from dbo.dtproperties
			where  @id=objectid
	else
		select property, version, uvalue, lvalue
			from dbo.dtproperties
			where  @id=objectid and @property=property
GO
/****** Object:  StoredProcedure [dbo].[dt_getpropertiesbyid_vcs]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER OFF
GO
create procedure [dbo].[dt_getpropertiesbyid_vcs]
    @id       int,
    @property varchar(64),
    @value    varchar(255) = NULL OUT

as

    set nocount on

    select @value = (
        select value
                from dbo.dtproperties
                where @id=objectid and @property=property
                )

GO
/****** Object:  StoredProcedure [dbo].[dt_getpropertiesbyid_vcs_u]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER OFF
GO
create procedure [dbo].[dt_getpropertiesbyid_vcs_u]
    @id       int,
    @property varchar(64),
    @value    nvarchar(255) = NULL OUT

as

    -- This procedure should no longer be called;  dt_getpropertiesbyid_vcsshould be called instead.
	-- Calls are forwarded to dt_getpropertiesbyid_vcs to maintain backward compatibility.
	set nocount on
    exec dbo.dt_getpropertiesbyid_vcs
		@id,
		@property,
		@value output

GO
/****** Object:  StoredProcedure [dbo].[dt_checkinobject]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER OFF
GO
create proc [dbo].[dt_checkinobject]
    @chObjectType  char(4),
    @vchObjectName varchar(255),
    @vchComment    varchar(255)='',
    @vchLoginName  varchar(255),
    @vchPassword   varchar(255)='',
    @iVCSFlags     int = 0,
    @iActionFlag   int = 0,   /* 0 => AddFile, 1 => CheckIn */
    @txStream1     Text = '', /* drop stream   */ /* There is a bug that if items are NULL they do not pass to OLE servers */
    @txStream2     Text = '', /* create stream */
    @txStream3     Text = ''  /* grant stream  */


as

	set nocount on

	declare @iReturn int
	declare @iObjectId int
	select @iObjectId = 0
	declare @iStreamObjectId int

	declare @VSSGUID varchar(100)
	select @VSSGUID = 'SQLVersionControl.VCS_SQL'

	declare @iPropertyObjectId int
	select @iPropertyObjectId  = 0

    select @iPropertyObjectId = (select objectid from dbo.dtproperties where property = 'VCSProjectID')

    declare @vchProjectName   varchar(255)
    declare @vchSourceSafeINI varchar(255)
    declare @vchServerName    varchar(255)
    declare @vchDatabaseName  varchar(255)
    declare @iReturnValue	  int
    declare @pos			  int
    declare @vchProcLinePiece varchar(255)

    
    exec dbo.dt_getpropertiesbyid_vcs @iPropertyObjectId, 'VCSProject',       @vchProjectName   OUT
    exec dbo.dt_getpropertiesbyid_vcs @iPropertyObjectId, 'VCSSourceSafeINI', @vchSourceSafeINI OUT
    exec dbo.dt_getpropertiesbyid_vcs @iPropertyObjectId, 'VCSSQLServer',     @vchServerName    OUT
    exec dbo.dt_getpropertiesbyid_vcs @iPropertyObjectId, 'VCSSQLDatabase',   @vchDatabaseName  OUT

    if @chObjectType = 'PROC'
    begin
        if @iActionFlag = 1
        begin
            /* Procedure Can have up to three streams
            Drop Stream, Create Stream, GRANT stream */

            begin tran compile_all

            /* try to compile the streams */
            exec (@txStream1)
            if @@error <> 0 GOTO E_Compile_Fail

            exec (@txStream2)
            if @@error <> 0 GOTO E_Compile_Fail

            exec (@txStream3)
            if @@error <> 0 GOTO E_Compile_Fail
        end

        exec @iReturn = master.dbo.sp_OACreate @VSSGUID, @iObjectId OUT
        if @iReturn <> 0 GOTO E_OAError

        exec @iReturn = master.dbo.sp_OAGetProperty @iObjectId, 'GetStreamObject', @iStreamObjectId OUT
        if @iReturn <> 0 GOTO E_OAError
        
        if @iActionFlag = 1
        begin
            
            declare @iStreamLength int
			
			select @pos=1
			select @iStreamLength = datalength(@txStream2)
			
			if @iStreamLength > 0
			begin
			
				while @pos < @iStreamLength
				begin
						
					select @vchProcLinePiece = substring(@txStream2, @pos, 255)
					
					exec @iReturn = master.dbo.sp_OAMethod @iStreamObjectId, 'AddStream', @iReturnValue OUT, @vchProcLinePiece
            		if @iReturn <> 0 GOTO E_OAError
            		
					select @pos = @pos + 255
					
				end
            
				exec @iReturn = master.dbo.sp_OAMethod @iObjectId,
														'CheckIn_StoredProcedure',
														NULL,
														@sProjectName = @vchProjectName,
														@sSourceSafeINI = @vchSourceSafeINI,
														@sServerName = @vchServerName,
														@sDatabaseName = @vchDatabaseName,
														@sObjectName = @vchObjectName,
														@sComment = @vchComment,
														@sLoginName = @vchLoginName,
														@sPassword = @vchPassword,
														@iVCSFlags = @iVCSFlags,
														@iActionFlag = @iActionFlag,
														@sStream = ''
                                        
			end
        end
        else
        begin
        
            select colid, text into #ProcLines
            from syscomments
            where id = object_id(@vchObjectName)
            order by colid

            declare @iCurProcLine int
            declare @iProcLines int
            select @iCurProcLine = 1
            select @iProcLines = (select count(*) from #ProcLines)
            while @iCurProcLine <= @iProcLines
            begin
                select @pos = 1
                declare @iCurLineSize int
                select @iCurLineSize = len((select text from #ProcLines where colid = @iCurProcLine))
                while @pos <= @iCurLineSize
                begin                
                    select @vchProcLinePiece = convert(varchar(255),
                        substring((select text from #ProcLines where colid = @iCurProcLine),
                                  @pos, 255 ))
                    exec @iReturn = master.dbo.sp_OAMethod @iStreamObjectId, 'AddStream', @iReturnValue OUT, @vchProcLinePiece
                    if @iReturn <> 0 GOTO E_OAError
                    select @pos = @pos + 255                  
                end
                select @iCurProcLine = @iCurProcLine + 1
            end
            drop table #ProcLines

            exec @iReturn = master.dbo.sp_OAMethod @iObjectId,
													'CheckIn_StoredProcedure',
													NULL,
													@sProjectName = @vchProjectName,
													@sSourceSafeINI = @vchSourceSafeINI,
													@sServerName = @vchServerName,
													@sDatabaseName = @vchDatabaseName,
													@sObjectName = @vchObjectName,
													@sComment = @vchComment,
													@sLoginName = @vchLoginName,
													@sPassword = @vchPassword,
													@iVCSFlags = @iVCSFlags,
													@iActionFlag = @iActionFlag,
													@sStream = ''
        end

        if @iReturn <> 0 GOTO E_OAError

        if @iActionFlag = 1
        begin
            commit tran compile_all
            if @@error <> 0 GOTO E_Compile_Fail
        end

    end

CleanUp:
	return

E_Compile_Fail:
	declare @lerror int
	select @lerror = @@error
	rollback tran compile_all
	RAISERROR (@lerror,16,-1)
	goto CleanUp

E_OAError:
	if @iActionFlag = 1 rollback tran compile_all
	exec dbo.dt_displayoaerror @iObjectId, @iReturn
	goto CleanUp


GO
/****** Object:  StoredProcedure [dbo].[dt_checkinobject_u]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER OFF
GO
create proc [dbo].[dt_checkinobject_u]
    @chObjectType  char(4),
    @vchObjectName nvarchar(255),
    @vchComment    nvarchar(255)='',
    @vchLoginName  nvarchar(255),
    @vchPassword   nvarchar(255)='',
    @iVCSFlags     int = 0,
    @iActionFlag   int = 0,   /* 0 => AddFile, 1 => CheckIn */
    @txStream1     text = '',  /* drop stream   */ /* There is a bug that if items are NULL they do not pass to OLE servers */
    @txStream2     text = '',  /* create stream */
    @txStream3     text = ''   /* grant stream  */

as	
	-- This procedure should no longer be called;  dt_checkinobject should be called instead.
	-- Calls are forwarded to dt_checkinobject to maintain backward compatibility.
	set nocount on
	exec dbo.dt_checkinobject
		@chObjectType,
		@vchObjectName,
		@vchComment,
		@vchLoginName,
		@vchPassword,
		@iVCSFlags,
		@iActionFlag,   
		@txStream1,		
		@txStream2,		
		@txStream3		


GO
/****** Object:  StoredProcedure [dbo].[dt_checkoutobject]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER OFF
GO
create proc [dbo].[dt_checkoutobject]
    @chObjectType  char(4),
    @vchObjectName varchar(255),
    @vchComment    varchar(255),
    @vchLoginName  varchar(255),
    @vchPassword   varchar(255),
    @iVCSFlags     int = 0,
    @iActionFlag   int = 0/* 0 => Checkout, 1 => GetLatest, 2 => UndoCheckOut */

as

	set nocount on

	declare @iReturn int
	declare @iObjectId int
	select @iObjectId =0

	declare @VSSGUID varchar(100)
	select @VSSGUID = 'SQLVersionControl.VCS_SQL'

	declare @iReturnValue int
	select @iReturnValue = 0

	declare @vchTempText varchar(255)

	/* this is for our strings */
	declare @iStreamObjectId int
	select @iStreamObjectId = 0

    declare @iPropertyObjectId int
    select @iPropertyObjectId = (select objectid from dbo.dtproperties where property = 'VCSProjectID')

    declare @vchProjectName   varchar(255)
    declare @vchSourceSafeINI varchar(255)
    declare @vchServerName    varchar(255)
    declare @vchDatabaseName  varchar(255)
    exec dbo.dt_getpropertiesbyid_vcs @iPropertyObjectId, 'VCSProject',       @vchProjectName   OUT
    exec dbo.dt_getpropertiesbyid_vcs @iPropertyObjectId, 'VCSSourceSafeINI', @vchSourceSafeINI OUT
    exec dbo.dt_getpropertiesbyid_vcs @iPropertyObjectId, 'VCSSQLServer',     @vchServerName    OUT
    exec dbo.dt_getpropertiesbyid_vcs @iPropertyObjectId, 'VCSSQLDatabase',   @vchDatabaseName  OUT

    if @chObjectType = 'PROC'
    begin
        /* Procedure Can have up to three streams
           Drop Stream, Create Stream, GRANT stream */

        exec @iReturn = master.dbo.sp_OACreate @VSSGUID, @iObjectId OUT

        if @iReturn <> 0 GOTO E_OAError

        exec @iReturn = master.dbo.sp_OAMethod @iObjectId,
												'CheckOut_StoredProcedure',
												NULL,
												@sProjectName = @vchProjectName,
												@sSourceSafeINI = @vchSourceSafeINI,
												@sObjectName = @vchObjectName,
												@sServerName = @vchServerName,
												@sDatabaseName = @vchDatabaseName,
												@sComment = @vchComment,
												@sLoginName = @vchLoginName,
												@sPassword = @vchPassword,
												@iVCSFlags = @iVCSFlags,
												@iActionFlag = @iActionFlag

        if @iReturn <> 0 GOTO E_OAError


        exec @iReturn = master.dbo.sp_OAGetProperty @iObjectId, 'GetStreamObject', @iStreamObjectId OUT

        if @iReturn <> 0 GOTO E_OAError

        create table #commenttext (id int identity, sourcecode varchar(255))


        select @vchTempText = 'STUB'
        while @vchTempText is not null
        begin
            exec @iReturn = master.dbo.sp_OAMethod @iStreamObjectId, 'GetStream', @iReturnValue OUT, @vchTempText OUT
            if @iReturn <> 0 GOTO E_OAError
            
            if (@vchTempText = '') set @vchTempText = null
            if (@vchTempText is not null) insert into #commenttext (sourcecode) select @vchTempText
        end

        select 'VCS'=sourcecode from #commenttext order by id
        select 'SQL'=text from syscomments where id = object_id(@vchObjectName) order by colid

    end

CleanUp:
    return

E_OAError:
    exec dbo.dt_displayoaerror @iObjectId, @iReturn
    GOTO CleanUp


GO
/****** Object:  StoredProcedure [dbo].[dt_checkoutobject_u]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER OFF
GO
create proc [dbo].[dt_checkoutobject_u]
    @chObjectType  char(4),
    @vchObjectName nvarchar(255),
    @vchComment    nvarchar(255),
    @vchLoginName  nvarchar(255),
    @vchPassword   nvarchar(255),
    @iVCSFlags     int = 0,
    @iActionFlag   int = 0/* 0 => Checkout, 1 => GetLatest, 2 => UndoCheckOut */

as

	-- This procedure should no longer be called;  dt_checkoutobject should be called instead.
	-- Calls are forwarded to dt_checkoutobject to maintain backward compatibility.
	set nocount on
	exec dbo.dt_checkoutobject
		@chObjectType,  
		@vchObjectName, 
		@vchComment,    
		@vchLoginName,  
		@vchPassword,  
		@iVCSFlags,    
		@iActionFlag 


GO
/****** Object:  StoredProcedure [dbo].[dt_isundersourcecontrol]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER OFF
GO
create proc [dbo].[dt_isundersourcecontrol]
    @vchLoginName varchar(255) = '',
    @vchPassword  varchar(255) = '',
    @iWhoToo      int = 0 /* 0 => Just check project; 1 => get list of objs */

as

	set nocount on

	declare @iReturn int
	declare @iObjectId int
	select @iObjectId = 0

	declare @VSSGUID varchar(100)
	select @VSSGUID = 'SQLVersionControl.VCS_SQL'

	declare @iReturnValue int
	select @iReturnValue = 0

	declare @iStreamObjectId int
	select @iStreamObjectId   = 0

	declare @vchTempText varchar(255)

    declare @iPropertyObjectId int
    select @iPropertyObjectId = (select objectid from dbo.dtproperties where property = 'VCSProjectID')

    declare @vchProjectName   varchar(255)
    declare @vchSourceSafeINI varchar(255)
    declare @vchServerName    varchar(255)
    declare @vchDatabaseName  varchar(255)
    exec dbo.dt_getpropertiesbyid_vcs @iPropertyObjectId, 'VCSProject',       @vchProjectName   OUT
    exec dbo.dt_getpropertiesbyid_vcs @iPropertyObjectId, 'VCSSourceSafeINI', @vchSourceSafeINI OUT
    exec dbo.dt_getpropertiesbyid_vcs @iPropertyObjectId, 'VCSSQLServer',     @vchServerName    OUT
    exec dbo.dt_getpropertiesbyid_vcs @iPropertyObjectId, 'VCSSQLDatabase',   @vchDatabaseName  OUT

    if (@vchProjectName = '')	set @vchProjectName		= null
    if (@vchSourceSafeINI = '') set @vchSourceSafeINI	= null
    if (@vchServerName = '')	set @vchServerName		= null
    if (@vchDatabaseName = '')	set @vchDatabaseName	= null
    
    if (@vchProjectName is null) or (@vchSourceSafeINI is null) or (@vchServerName is null) or (@vchDatabaseName is null)
    begin
        RAISERROR('Not Under Source Control',16,-1)
        return
    end

    if @iWhoToo = 1
    begin

        /* Get List of Procs in the project */
        exec @iReturn = master.dbo.sp_OACreate @VSSGUID, @iObjectId OUT
        if @iReturn <> 0 GOTO E_OAError

        exec @iReturn = master.dbo.sp_OAMethod @iObjectId,
												'GetListOfObjects',
												NULL,
												@vchProjectName,
												@vchSourceSafeINI,
												@vchServerName,
												@vchDatabaseName,
												@vchLoginName,
												@vchPassword

        if @iReturn <> 0 GOTO E_OAError

        exec @iReturn = master.dbo.sp_OAGetProperty @iObjectId, 'GetStreamObject', @iStreamObjectId OUT

        if @iReturn <> 0 GOTO E_OAError

        create table #ObjectList (id int identity, vchObjectlist varchar(255))

        select @vchTempText = 'STUB'
        while @vchTempText is not null
        begin
            exec @iReturn = master.dbo.sp_OAMethod @iStreamObjectId, 'GetStream', @iReturnValue OUT, @vchTempText OUT
            if @iReturn <> 0 GOTO E_OAError
            
            if (@vchTempText = '') set @vchTempText = null
            if (@vchTempText is not null) insert into #ObjectList (vchObjectlist ) select @vchTempText
        end

        select vchObjectlist from #ObjectList order by id
    end

CleanUp:
    return

E_OAError:
    exec dbo.dt_displayoaerror @iObjectId, @iReturn
    goto CleanUp


GO
/****** Object:  StoredProcedure [dbo].[dt_isundersourcecontrol_u]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER OFF
GO
create proc [dbo].[dt_isundersourcecontrol_u]
    @vchLoginName nvarchar(255) = '',
    @vchPassword  nvarchar(255) = '',
    @iWhoToo      int = 0 /* 0 => Just check project; 1 => get list of objs */

as
	-- This procedure should no longer be called;  dt_isundersourcecontrol should be called instead.
	-- Calls are forwarded to dt_isundersourcecontrol to maintain backward compatibility.
	set nocount on
	exec dbo.dt_isundersourcecontrol
		@vchLoginName,
		@vchPassword,
		@iWhoToo 


GO
/****** Object:  StoredProcedure [dbo].[dt_removefromsourcecontrol]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER OFF
GO
create procedure [dbo].[dt_removefromsourcecontrol]

as

    set nocount on

    declare @iPropertyObjectId int
    select @iPropertyObjectId = (select objectid from dbo.dtproperties where property = 'VCSProjectID')

    exec dbo.dt_droppropertiesbyid @iPropertyObjectId, null

    /* -1 is returned by dt_droppopertiesbyid */
    if @@error <> 0 and @@error <> -1 return 1

    return 0


GO
/****** Object:  StoredProcedure [dbo].[dt_setpropertybyid]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER OFF
GO
/*
**	If the property already exists, reset the value; otherwise add property
**		id -- the id in sysobjects of the object
**		property -- the name of the property
**		value -- the text value of the property
**		lvalue -- the binary value of the property (image)
*/
create procedure [dbo].[dt_setpropertybyid]
	@id int,
	@property varchar(64),
	@value varchar(255),
	@lvalue image
as
	set nocount on
	declare @uvalue nvarchar(255) 
	set @uvalue = convert(nvarchar(255), @value) 
	if exists (select * from dbo.dtproperties 
			where objectid=@id and property=@property)
	begin
		--
		-- bump the version count for this row as we update it
		--
		update dbo.dtproperties set value=@value, uvalue=@uvalue, lvalue=@lvalue, version=version+1
			where objectid=@id and property=@property
	end
	else
	begin
		--
		-- version count is auto-set to 0 on initial insert
		--
		insert dbo.dtproperties (property, objectid, value, uvalue, lvalue)
			values (@property, @id, @value, @uvalue, @lvalue)
	end

GO
/****** Object:  StoredProcedure [dbo].[dt_setpropertybyid_u]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER OFF
GO
/*
**	If the property already exists, reset the value; otherwise add property
**		id -- the id in sysobjects of the object
**		property -- the name of the property
**		uvalue -- the text value of the property
**		lvalue -- the binary value of the property (image)
*/
create procedure [dbo].[dt_setpropertybyid_u]
	@id int,
	@property varchar(64),
	@uvalue nvarchar(255),
	@lvalue image
as
	set nocount on
	-- 
	-- If we are writing the name property, find the ansi equivalent. 
	-- If there is no lossless translation, generate an ansi name. 
	-- 
	declare @avalue varchar(255) 
	set @avalue = null 
	if (@uvalue is not null) 
	begin 
		if (convert(nvarchar(255), convert(varchar(255), @uvalue)) = @uvalue) 
		begin 
			set @avalue = convert(varchar(255), @uvalue) 
		end 
		else 
		begin 
			if 'DtgSchemaNAME' = @property 
			begin 
				exec dbo.dt_generateansiname @avalue output 
			end 
		end 
	end 
	if exists (select * from dbo.dtproperties 
			where objectid=@id and property=@property)
	begin
		--
		-- bump the version count for this row as we update it
		--
		update dbo.dtproperties set value=@avalue, uvalue=@uvalue, lvalue=@lvalue, version=version+1
			where objectid=@id and property=@property
	end
	else
	begin
		--
		-- version count is auto-set to 0 on initial insert
		--
		insert dbo.dtproperties (property, objectid, value, uvalue, lvalue)
			values (@property, @id, @avalue, @uvalue, @lvalue)
	end
GO
/****** Object:  StoredProcedure [dbo].[dt_validateloginparams]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER OFF
GO
create proc [dbo].[dt_validateloginparams]
    @vchLoginName  varchar(255),
    @vchPassword   varchar(255)
as

set nocount on

declare @iReturn int
declare @iObjectId int
select @iObjectId =0

declare @VSSGUID varchar(100)
select @VSSGUID = 'SQLVersionControl.VCS_SQL'

    declare @iPropertyObjectId int
    select @iPropertyObjectId = (select objectid from dbo.dtproperties where property = 'VCSProjectID')

    declare @vchSourceSafeINI varchar(255)
    exec dbo.dt_getpropertiesbyid_vcs @iPropertyObjectId, 'VCSSourceSafeINI', @vchSourceSafeINI OUT

    exec @iReturn = master.dbo.sp_OACreate @VSSGUID, @iObjectId OUT
    if @iReturn <> 0 GOTO E_OAError

    exec @iReturn = master.dbo.sp_OAMethod @iObjectId,
											'ValidateLoginParams',
											NULL,
											@sSourceSafeINI = @vchSourceSafeINI,
											@sLoginName = @vchLoginName,
											@sPassword = @vchPassword
    if @iReturn <> 0 GOTO E_OAError

CleanUp:
    return

E_OAError:
    exec dbo.dt_displayoaerror @iObjectId, @iReturn
    GOTO CleanUp


GO
/****** Object:  StoredProcedure [dbo].[dt_validateloginparams_u]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER OFF
GO
create proc [dbo].[dt_validateloginparams_u]
    @vchLoginName  nvarchar(255),
    @vchPassword   nvarchar(255)
as

	-- This procedure should no longer be called;  dt_validateloginparams should be called instead.
	-- Calls are forwarded to dt_validateloginparams to maintain backward compatibility.
	set nocount on
	exec dbo.dt_validateloginparams
		@vchLoginName,
		@vchPassword 


GO
/****** Object:  StoredProcedure [dbo].[dt_vcsenabled]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER OFF
GO
create proc [dbo].[dt_vcsenabled]

as

set nocount on

declare @iObjectId int
select @iObjectId = 0

declare @VSSGUID varchar(100)
select @VSSGUID = 'SQLVersionControl.VCS_SQL'

    declare @iReturn int
    exec @iReturn = master.dbo.sp_OACreate @VSSGUID, @iObjectId OUT
    if @iReturn <> 0 raiserror('', 16, -1) /* Can't Load Helper DLLC */


GO
/****** Object:  StoredProcedure [dbo].[dt_verstamp006]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER OFF
GO
/*
**	This procedure returns the version number of the stored
**    procedures used by legacy versions of the Microsoft
**	Visual Database Tools.  Version is 7.0.00.
*/
create procedure [dbo].[dt_verstamp006]
as
	select 7000
GO
/****** Object:  StoredProcedure [dbo].[dt_verstamp007]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER OFF
GO
/*
**	This procedure returns the version number of the stored
**    procedures used by the the Microsoft Visual Database Tools.
**	Version is 7.0.05.
*/
create procedure [dbo].[dt_verstamp007]
as
	select 7005
GO
/****** Object:  StoredProcedure [dbo].[dt_whocheckedout]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER OFF
GO
create proc [dbo].[dt_whocheckedout]
        @chObjectType  char(4),
        @vchObjectName varchar(255),
        @vchLoginName  varchar(255),
        @vchPassword   varchar(255)

as

set nocount on

declare @iReturn int
declare @iObjectId int
select @iObjectId =0

declare @VSSGUID varchar(100)
select @VSSGUID = 'SQLVersionControl.VCS_SQL'

    declare @iPropertyObjectId int

    select @iPropertyObjectId = (select objectid from dbo.dtproperties where property = 'VCSProjectID')

    declare @vchProjectName   varchar(255)
    declare @vchSourceSafeINI varchar(255)
    declare @vchServerName    varchar(255)
    declare @vchDatabaseName  varchar(255)
    exec dbo.dt_getpropertiesbyid_vcs @iPropertyObjectId, 'VCSProject',       @vchProjectName   OUT
    exec dbo.dt_getpropertiesbyid_vcs @iPropertyObjectId, 'VCSSourceSafeINI', @vchSourceSafeINI OUT
    exec dbo.dt_getpropertiesbyid_vcs @iPropertyObjectId, 'VCSSQLServer',     @vchServerName    OUT
    exec dbo.dt_getpropertiesbyid_vcs @iPropertyObjectId, 'VCSSQLDatabase',   @vchDatabaseName  OUT

    if @chObjectType = 'PROC'
    begin
        exec @iReturn = master.dbo.sp_OACreate @VSSGUID, @iObjectId OUT

        if @iReturn <> 0 GOTO E_OAError

        declare @vchReturnValue varchar(255)
        select @vchReturnValue = ''

        exec @iReturn = master.dbo.sp_OAMethod @iObjectId,
												'WhoCheckedOut',
												@vchReturnValue OUT,
												@sProjectName = @vchProjectName,
												@sSourceSafeINI = @vchSourceSafeINI,
												@sObjectName = @vchObjectName,
												@sServerName = @vchServerName,
												@sDatabaseName = @vchDatabaseName,
												@sLoginName = @vchLoginName,
												@sPassword = @vchPassword

        if @iReturn <> 0 GOTO E_OAError

        select @vchReturnValue

    end

CleanUp:
    return

E_OAError:
    exec dbo.dt_displayoaerror @iObjectId, @iReturn
    GOTO CleanUp


GO
/****** Object:  StoredProcedure [dbo].[dt_whocheckedout_u]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER OFF
GO
create proc [dbo].[dt_whocheckedout_u]
        @chObjectType  char(4),
        @vchObjectName nvarchar(255),
        @vchLoginName  nvarchar(255),
        @vchPassword   nvarchar(255)

as

	-- This procedure should no longer be called;  dt_whocheckedout should be called instead.
	-- Calls are forwarded to dt_whocheckedout to maintain backward compatibility.
	set nocount on
	exec dbo.dt_whocheckedout
		@chObjectType, 
		@vchObjectName,
		@vchLoginName, 
		@vchPassword  


GO
/****** Object:  StoredProcedure [dbo].[P_MASS_COMP_DELETE]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[P_MASS_COMP_DELETE]
AS
BEGIN

	declare @comId int
	DECLARE c CURSOR FOR select com_id from tb_complaint where com_country_fk=33 and year(com_crdate)=2009 and month(com_crdate)=9 and day(com_crdate)=16
	OPEN c
	FETCH NEXT FROM c INTO @comId
	WHILE @@FETCH_STATUS = 0
	BEGIN
		delete from tb_complaint_product_defect where CPD_COMPLAINT_PRODUCT_FK in (select cop_id from tb_complaint_product where cop_complaint_fk=@comId)	
		delete from tb_complaint_product where cop_complaint_fk=@comId
		delete from tb_complaint_document where cod_complaint_fk=@comId
		delete from tb_complaint_state where cos_complaint_fk=@comId
		delete from tb_complaint_calculation where cca_complaint_fk=@comId
		delete from tb_complaint_calculation_real where ccr_complaint_fk=@comId
		delete from tb_complaint_expedicion_real where cer_complaint_fk=@comId
		delete from TB_STAT_STATE_WEEK where SSW_COMPLAINT_FK=@comId
		delete from tb_complaint where com_id=@comId
		FETCH NEXT FROM c INTO @comId
	END 
	CLOSE c
	DEALLOCATE c

END
GO
/****** Object:  StoredProcedure [dbo].[SAVE_STATE]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[SAVE_STATE] AS

delete from tb_stat_state where month(sst_crdate)=month(dateadd(m,-1,getdate())) and year(sst_crdate)=year(dateadd(m,-1,getdate()))
insert into tb_stat_state(sst_complaint_fk,sst_state_fk,sst_crdate)
Select com_id,cos_state_fk,dateadd(m,-1,getdate()) from tb_complaint inner join  tb_complaint_state on (com_id=cos_complaint_fk and cos_valid=1)
GO
/****** Object:  StoredProcedure [dbo].[SAVE_STATE_ALL]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[SAVE_STATE_ALL] AS

delete from tb_stat_state
declare @tmp varchar(8)
declare @dat datetime
declare c cursor for
	select distinct convert(varchar(4),year(cos_crdate))+'-'+convert(varchar(2),month(cos_crdate)) as dat from tb_complaint_state order by dat
open c
fetch next from c into @tmp
WHILE @@FETCH_STATUS = 0
BEGIN 
	SET @dat=@tmp+'-1'
	insert into tb_stat_state(sst_crdate,sst_complaint_fk,sst_state_fk)
	Select dateadd(m,-1,@dat),com_id,(select top 1 cos_state_fk from tb_complaint_state where com_id=cos_complaint_fk and cos_crdate<@dat order by cos_crdate desc)as state from tb_complaint 
	fetch next from c into @tmp
END
close c
deallocate c
delete from tb_stat_state where sst_state_fk is null
GO
/****** Object:  StoredProcedure [dbo].[SAVE_STATE_WEEK]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[SAVE_STATE_WEEK] AS

delete from tb_stat_state_week where ssw_week=DATEPART ( week ,dateadd(d,-1,getdate()) ) and ssw_year=year(dateadd(d,-1,getdate()))
insert into tb_stat_state_week(ssw_complaint_fk,ssw_state_fk,ssw_week,ssw_year)
Select com_id,cos_state_fk,datepart(week,dateadd(d,-1,getdate())),year(dateadd(d,-1,getdate())) from tb_complaint inner join  tb_complaint_state on (com_id=cos_complaint_fk and cos_valid=1)
GO
/****** Object:  StoredProcedure [dbo].[SAVE_STATE_WEEK_ALL]    Script Date: 21-05-2019 12:00:16 ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[SAVE_STATE_WEEK_ALL] AS
delete from tb_stat_state_week
declare @tmpYear int
declare @tmpWeek int
declare @dat datetime
declare c cursor for
	select distinct datepart(week,cos_crdate) as w,year(cos_crdate) as y from tb_complaint_state order by y,w
open c
fetch next from c into @tmpWeek,@tmpYear
WHILE @@FETCH_STATUS = 0
BEGIN 
	SET @dat=dateAdd(week,@tmpWeek,convert(datetime,convert(varchar(4),@tmpYear)+'-1-1'))
	insert into tb_stat_state_week(ssw_week,ssw_year,ssw_complaint_fk,ssw_state_fk)
	Select datepart(week,dateadd(d,-1,@dat)),datepart(year,dateadd(d,-1,@dat)),com_id,(select top 1 cos_state_fk from tb_complaint_state where com_id=cos_complaint_fk and cos_crdate<@dat order by cos_crdate desc)as state from tb_complaint 
	fetch next from c into @tmpWeek,@tmpYear
END
close c
deallocate c
delete from tb_stat_state_week where ssw_state_fk is null
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'distributor' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TB_COMPLAINT', @level2type=N'COLUMN',@level2name=N'COM_DISTRIB_FK'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Zakaznik' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TB_COMPLAINT', @level2type=N'COLUMN',@level2name=N'COM_CUSTOMER_FK'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'adresa stavby' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TB_COMPLAINT', @level2type=N'COLUMN',@level2name=N'COM_CONSTRUCTION_FK'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'datum odberu z vyrobniho zavodu' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TB_COMPLAINT', @level2type=N'COLUMN',@level2name=N'COM_DATE_DELIVERED'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Cislo faktury - pri opakovane' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TB_COMPLAINT', @level2type=N'COLUMN',@level2name=N'COM_INVOICE'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'odkaz na opakovanou reklamaci' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TB_COMPLAINT', @level2type=N'COLUMN',@level2name=N'COM_REPEAT'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'G-dobropis,C-fin nahrada, F-nahradni plneni' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TB_COMPLAINT', @level2type=N'COLUMN',@level2name=N'COM_F3_NUMBER_TYPE'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'rozsirena reklamamce' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TB_COMPLAINT_INDEMNIFICATION', @level2type=N'COLUMN',@level2name=N'COP_ADVANCED'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TB_COMPLAINT_INDEMNIFICATION', @level2type=N'COLUMN',@level2name=N'COP_PRODUCT_TYPE_AC'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'rozsirena reklamamce' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TB_COMPLAINT_PRODUCT', @level2type=N'COLUMN',@level2name=N'COP_ADVANCED'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TB_COMPLAINT_PRODUCT', @level2type=N'COLUMN',@level2name=N'COP_PRODUCT_TYPE_AC'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Odpovedna osoba' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TB_COMPLAINT_STATE', @level2type=N'COLUMN',@level2name=N'COS_PERSON_FK'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'pocet kusu pro ktery je vaha uvedena' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TB_PRODUCT', @level2type=N'COLUMN',@level2name=N'PRO_WEIGHT_PC'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Descriptionn', @value=N'pocet kusu pro ktery je vaha uvedena' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TB_PRODUCT', @level2type=N'COLUMN',@level2name=N'PRO_WEIGHT_PC'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'pocet kusu pro ktery je vaha uvedena' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TB_PRODUCT_old', @level2type=N'COLUMN',@level2name=N'PRO_WEIGHT_PC'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Descriptionn', @value=N'pocet kusu pro ktery je vaha uvedena' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TB_PRODUCT_old', @level2type=N'COLUMN',@level2name=N'PRO_WEIGHT_PC'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'10 - editovat, 1 - nahlizet, kdyz nemame tak nesmi nic' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TB_USER_ROLENEW_ASSIGN', @level2type=N'COLUMN',@level2name=N'URA_RIGHT'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "TB_COMPLAINT"
            Begin Extent = 
               Top = 6
               Left = 38
               Bottom = 212
               Right = 311
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "TB_COMPLAINT_PRODUCT"
            Begin Extent = 
               Top = 63
               Left = 427
               Bottom = 171
               Right = 667
            End
            DisplayFlags = 280
            TopColumn = 18
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 12
         Column = 1440
         Alias = 900
         Table = 1170
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'_com_f1_cbo_cmo'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=1 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'_com_f1_cbo_cmo'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "src"
            Begin Extent = 
               Top = 6
               Left = 38
               Bottom = 114
               Right = 262
            End
            DisplayFlags = 280
            TopColumn = 20
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 900
         Table = 1170
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'_stat_complaint_product'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=1 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'_stat_complaint_product'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "_stat_complaint_product"
            Begin Extent = 
               Top = 6
               Left = 38
               Bottom = 114
               Right = 228
            End
            DisplayFlags = 280
            TopColumn = 10
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
      Begin ColumnWidths = 10
         Width = 284
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 900
         Table = 1170
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'_stat_complaint_product_percent'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=1 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'_stat_complaint_product_percent'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "TB_ADDRESS_NEW"
            Begin Extent = 
               Top = 6
               Left = 38
               Bottom = 114
               Right = 237
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1650
         Alias = 825
         Table = 2145
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'TB_ADDRESS'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=1 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'TB_ADDRESS'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "TB_ADDRESS_NEW"
            Begin Extent = 
               Top = 6
               Left = 38
               Bottom = 114
               Right = 237
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 3105
         Table = 1170
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'TB_DISTRIB'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=1 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'TB_DISTRIB'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "TB_ADDRESS_NEW"
            Begin Extent = 
               Top = 6
               Left = 38
               Bottom = 114
               Right = 237
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 900
         Table = 1170
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'TB_REALIZ'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=1 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'TB_REALIZ'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "TB_COMPLAINT"
            Begin Extent = 
               Top = 6
               Left = 38
               Bottom = 114
               Right = 284
            End
            DisplayFlags = 280
            TopColumn = 171
         End
         Begin Table = "country"
            Begin Extent = 
               Top = 114
               Left = 38
               Bottom = 222
               Right = 213
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "TB_COMPLAINT_STATE"
            Begin Extent = 
               Top = 114
               Left = 251
               Bottom = 222
               Right = 434
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "TB_USER"
            Begin Extent = 
               Top = 222
               Left = 38
               Bottom = 330
               Right = 233
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "state"
            Begin Extent = 
               Top = 6
               Left = 322
               Bottom = 114
               Right = 490
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
      Begin ColumnWidths = 9
         Width = 284
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias ' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'V_COMPLAINT_BASIC'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane2', @value=N'= 900
         Table = 1170
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'V_COMPLAINT_BASIC'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=2 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'V_COMPLAINT_BASIC'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[41] 4[20] 2[30] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = -480
         Left = 0
      End
      Begin Tables = 
         Begin Table = "TB_COMPLAINT"
            Begin Extent = 
               Top = 6
               Left = 38
               Bottom = 114
               Right = 284
            End
            DisplayFlags = 280
            TopColumn = 155
         End
         Begin Table = "country"
            Begin Extent = 
               Top = 114
               Left = 38
               Bottom = 222
               Right = 213
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "TB_COMPLAINT_STATE"
            Begin Extent = 
               Top = 114
               Left = 251
               Bottom = 222
               Right = 434
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "TB_USER"
            Begin Extent = 
               Top = 222
               Left = 38
               Bottom = 330
               Right = 233
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "state"
            Begin Extent = 
               Top = 6
               Left = 322
               Bottom = 114
               Right = 490
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 2745
         Alias = 1380
         Table = 1170
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'V_COMPLAINT_DELETED'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane2', @value=N'
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'V_COMPLAINT_DELETED'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=2 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'V_COMPLAINT_DELETED'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[52] 4[27] 2[6] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = -305
         Left = 0
      End
      Begin Tables = 
         Begin Table = "V_STAT_PRODUCED"
            Begin Extent = 
               Top = 6
               Left = 38
               Bottom = 114
               Right = 284
            End
            DisplayFlags = 280
            TopColumn = 9
         End
         Begin Table = "TB_COMPLAINT"
            Begin Extent = 
               Top = 114
               Left = 38
               Bottom = 222
               Right = 284
            End
            DisplayFlags = 280
            TopColumn = 109
         End
         Begin Table = "TB_COMPLAINT_PRODUCT"
            Begin Extent = 
               Top = 222
               Left = 38
               Bottom = 330
               Right = 262
            End
            DisplayFlags = 280
            TopColumn = 5
         End
         Begin Table = "TB_PRODUCT"
            Begin Extent = 
               Top = 330
               Left = 38
               Bottom = 438
               Right = 218
            End
            DisplayFlags = 280
            TopColumn = 24
         End
         Begin Table = "gr1"
            Begin Extent = 
               Top = 222
               Left = 300
               Bottom = 330
               Right = 475
            End
            DisplayFlags = 280
            TopColumn = 4
         End
         Begin Table = "gr3"
            Begin Extent = 
               Top = 330
               Left = 256
               Bottom = 438
               Right = 431
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "cbo"
            Begin Extent = 
               Top = 438
               Left = 38
               Bottom = 546
               Right = 213
            End
         ' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'v_reklamace_tuny_price'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane2', @value=N'   DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "dat"
            Begin Extent = 
               Top = 438
               Left = 251
               Bottom = 546
               Right = 434
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "TB_COMPLAINT_PRODUCT_DEFECT"
            Begin Extent = 
               Top = 546
               Left = 38
               Bottom = 654
               Right = 274
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "TB_DEFECT"
            Begin Extent = 
               Top = 6
               Left = 322
               Bottom = 114
               Right = 476
            End
            DisplayFlags = 280
            TopColumn = 5
         End
         Begin Table = "_stat_2011_09_22"
            Begin Extent = 
               Top = 114
               Left = 322
               Bottom = 222
               Right = 473
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "v_reklamace_tuny"
            Begin Extent = 
               Top = 546
               Left = 312
               Bottom = 624
               Right = 463
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 7575
         Alias = 1710
         Table = 2625
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'v_reklamace_tuny_price'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=2 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'v_reklamace_tuny_price'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[49] 4[12] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = -192
         Left = 0
      End
      Begin Tables = 
         Begin Table = "V_STAT_PRODUCED"
            Begin Extent = 
               Top = 6
               Left = 38
               Bottom = 136
               Right = 313
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "TB_COMPLAINT"
            Begin Extent = 
               Top = 138
               Left = 38
               Bottom = 268
               Right = 319
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "TB_COMPLAINT_PRODUCT"
            Begin Extent = 
               Top = 270
               Left = 38
               Bottom = 400
               Right = 285
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "TB_PRODUCT"
            Begin Extent = 
               Top = 402
               Left = 38
               Bottom = 532
               Right = 237
            End
            DisplayFlags = 280
            TopColumn = 22
         End
         Begin Table = "gr1"
            Begin Extent = 
               Top = 534
               Left = 38
               Bottom = 664
               Right = 232
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "cbo"
            Begin Extent = 
               Top = 534
               Left = 270
               Bottom = 664
               Right = 464
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "TB_COMPLAINT_PRODUCT_DEFECT"
            Begin Extent = 
               Top = 666
               Left = 38
               Bottom = 796
               Right = 300
    ' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'v_reklamace_tuny_price_detailed'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane2', @value=N'        End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "TB_DEFECT"
            Begin Extent = 
               Top = 402
               Left = 275
               Bottom = 532
               Right = 462
            End
            DisplayFlags = 280
            TopColumn = 29
         End
         Begin Table = "v_reklamace_tuny"
            Begin Extent = 
               Top = 798
               Left = 38
               Bottom = 894
               Right = 208
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "gr1s"
            Begin Extent = 
               Top = 198
               Left = 357
               Bottom = 328
               Right = 551
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "CALCULATION_REAL"
            Begin Extent = 
               Top = 198
               Left = 589
               Bottom = 328
               Right = 792
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 900
         Table = 1170
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'v_reklamace_tuny_price_detailed'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=2 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'v_reklamace_tuny_price_detailed'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = -345
         Left = 0
      End
      Begin Tables = 
         Begin Table = "V_STAT_PRODUCED"
            Begin Extent = 
               Top = 6
               Left = 38
               Bottom = 114
               Right = 284
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "TB_COMPLAINT"
            Begin Extent = 
               Top = 114
               Left = 38
               Bottom = 222
               Right = 284
            End
            DisplayFlags = 280
            TopColumn = 109
         End
         Begin Table = "TB_COMPLAINT_PRODUCT"
            Begin Extent = 
               Top = 222
               Left = 38
               Bottom = 330
               Right = 262
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "TB_PRODUCT"
            Begin Extent = 
               Top = 330
               Left = 38
               Bottom = 438
               Right = 218
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "gr1"
            Begin Extent = 
               Top = 222
               Left = 300
               Bottom = 330
               Right = 475
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "gr3"
            Begin Extent = 
               Top = 330
               Left = 256
               Bottom = 438
               Right = 431
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "cbo"
            Begin Extent = 
               Top = 438
               Left = 38
               Bottom = 546
               Right = 213
            End
         ' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'v_reklamace_tuny_price_old'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane2', @value=N'   DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "dat"
            Begin Extent = 
               Top = 438
               Left = 251
               Bottom = 546
               Right = 434
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "TB_COMPLAINT_PRODUCT_DEFECT"
            Begin Extent = 
               Top = 546
               Left = 38
               Bottom = 654
               Right = 274
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "TB_DEFECT"
            Begin Extent = 
               Top = 6
               Left = 322
               Bottom = 114
               Right = 476
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "_stat_2011_09_22"
            Begin Extent = 
               Top = 114
               Left = 322
               Bottom = 222
               Right = 473
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "v_reklamace_tuny"
            Begin Extent = 
               Top = 546
               Left = 312
               Bottom = 624
               Right = 463
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 6975
         Alias = 900
         Table = 1170
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'v_reklamace_tuny_price_old'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=2 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'v_reklamace_tuny_price_old'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = -349
         Left = 0
      End
      Begin Tables = 
         Begin Table = "c"
            Begin Extent = 
               Top = 6
               Left = 38
               Bottom = 114
               Right = 284
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "country"
            Begin Extent = 
               Top = 114
               Left = 38
               Bottom = 222
               Right = 213
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "TB_COMPLAINT_STATE"
            Begin Extent = 
               Top = 114
               Left = 251
               Bottom = 222
               Right = 434
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "state"
            Begin Extent = 
               Top = 222
               Left = 38
               Bottom = 330
               Right = 213
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1845
         Alias = 900
         Table = 1170
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'V_STAT_BASIC'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=1 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'V_STAT_BASIC'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "TB_COMPLAINT_CALCULATION"
            Begin Extent = 
               Top = 6
               Left = 38
               Bottom = 114
               Right = 237
            End
            DisplayFlags = 280
            TopColumn = 7
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 12
         Column = 3105
         Alias = 900
         Table = 1170
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'V_STAT_CALCULATION'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=1 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'V_STAT_CALCULATION'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "TB_COMPLAINT_CALCULATION_REAL"
            Begin Extent = 
               Top = 6
               Left = 38
               Bottom = 114
               Right = 237
            End
            DisplayFlags = 280
            TopColumn = 7
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 12
         Column = 5415
         Alias = 900
         Table = 1170
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'V_STAT_CALCULATION_REAL'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=1 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'V_STAT_CALCULATION_REAL'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "TB_COMPLAINT_CALCULATION_REAL"
            Begin Extent = 
               Top = 6
               Left = 38
               Bottom = 114
               Right = 237
            End
            DisplayFlags = 280
            TopColumn = 7
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 12
         Column = 4095
         Alias = 2205
         Table = 1170
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'V_STAT_CALCULATION_RT'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=1 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'V_STAT_CALCULATION_RT'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "TB_COMPLAINT_CALCULATION"
            Begin Extent = 
               Top = 6
               Left = 38
               Bottom = 114
               Right = 237
            End
            DisplayFlags = 280
            TopColumn = 7
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 12
         Column = 4080
         Alias = 900
         Table = 1170
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'V_STAT_CALCULATION_WT'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=1 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'V_STAT_CALCULATION_WT'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "TB_COMPLAINT_PRODUCT"
            Begin Extent = 
               Top = 6
               Left = 38
               Bottom = 114
               Right = 262
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "TB_PRODUCT"
            Begin Extent = 
               Top = 114
               Left = 38
               Bottom = 222
               Right = 223
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "TB_COMPLAINT_PRODUCT_DEFECT"
            Begin Extent = 
               Top = 222
               Left = 38
               Bottom = 330
               Right = 274
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "TB_DEFECT"
            Begin Extent = 
               Top = 6
               Left = 300
               Bottom = 114
               Right = 473
            End
            DisplayFlags = 280
            TopColumn = 29
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 900
         Table = 1170
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'V_STAT_PRODUCT'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=1 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'V_STAT_PRODUCT'
GO
USE [master]
GO
ALTER DATABASE [2014_servisni_web_com] SET  READ_WRITE 
GO



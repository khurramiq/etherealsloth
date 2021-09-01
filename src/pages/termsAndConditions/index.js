import React from "react";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { Link } from "react-router-dom";
import "./termsAndConditions.css";
import { Button } from "@material-ui/core";
import Footer from "../../components/footer";
import Header from "../../components/header";

const TermsAndConditions = ({account}) => {
  return (
    <>
      <Header account={account}/>
      <div className="terms-and-conditions-wrapper">
        <div className="terms-and-conditions-container">
          <h1>TERMS & CONDITIONS</h1>
          <p>
            Please review these Terms carefully, as they set out your rights and
            responsibilities when you use this site to buy an Angry Bunny
            non-fungible token (Angry Bunnies NFT). Before using the Smart
            Contracts or the Site, you must agree to these T&C and any other
            terms and conditions incorporated or referenced herein (the T&C and
            any other terms and conditions incorporated or referenced herein are
            collectively referred to as the “Terms”).
          </p>
          <p>
            This Website located at <Link to="./">www.Angrybunniesnft.com</Link>{" "}
            Contains a collection of digital artworks (NFTs as defined
            hereinafter) running on the Ethereum network, using uniquely coded
            smart contracts (each, a “Smart Contract”), that allow users to
            acquire, buy, sell, own and transfer, the unique digital characters
            known as Angry Bunnies This Website is only an interface allowing
            participants to exchange digital collectibles. If any provision of
            these Terms of Service or any future changes are unacceptable to
            you, do not use or continue to use the Website and do not link your
            Ethereum wallets to our platform. Your continued use of the Website
            following the posting of any notice of any change to these Terms of
            Service shall constitute your acceptance and agreement to such
            change.
          </p>
          <p>
            DEFINITIONS
            <br />
            “Art” Meaning any art, design and drawings that may be associated
            with an NFT that you own. “NFT” meaning any blockchain tracked,
            non-fungible token, such as those conforming to the ERC-721
            standard. “Own” meaning, with respect to an Angry Bunnies NFT, an
            NFT that you have purchased or otherwise rightfully acquired from a
            legitimate source, where proof of such purchase is recorded on the
            relevant blockchain. “Purchased NFT” meaning an Angry Bunnies NFT
            that you own.
          </p>
          <p>
            OBLIGATIONS
            <br />
            By accessing the Website, linking your Ethereum wallets and/or
            purchasing an NFT from Angry Bunnies, you agree to be bound by the
            following: You must be at least thirteen (13) years to access and
            use the platform; provided, if you are between the ages of thirteen
            (13) and eighteen (18) years old (or any greater age required to be
            deemed to have reached the age of majority under the applicable law
            of the state or jurisdiction of your primary residence) you may only
            access and use the platform with the prior permission of your parent
            or legal guardian, and you represent and warrant to us that you have
            such permission and that your parent or legal guardian has reviewed
            and discussed these terms of service with you. Since certain content
            made available on the platform may not be suitable for minors, we
            recommend that parents or legal guardians who permit their child to
            access and use the Website to supervise such child’s activity,
            including, without limitation, any engagement with any other user
            thereon.
          </p>
          <p>
            You warrant that the purchase of any NFT from the Website will not
            amount to:
          </p>
          <ul>
            <li>Breach of any agreements with any third parties,</li>
            <li>
              Breach of any agreements with banks or financial institutions, or
              any other form of agreement,
            </li>
            <li>Breach of any applicable laws of your jurisdiction,</li>
            <li>
              An infringement, misappropriation or violation of a third party’s
              patent, copyright, trademark, trade secret, moral rights or other
              proprietary or intellectual property rights, or rights of
              publicity or privacy, or result in the violation of any applicable
              law or regulation
            </li>
          </ul>
          <p>
            You represent and warrant that you understand the cryptocurrencies
            and NFT market, along with associated risks, expenses, and fees. To
            initiate certain transactions on the Website, a User must
            voluntarily invoke one or more smart contract operations from an
            Ethereum Wallet. All such transactions on the Website, including
            sale or purchases of NFTs are initiated though one or more smart
            contracts at the sole discretion and at the complete risk of the
            Users. The smart contracts are configured to facilitate the
            execution of a sale or transfer of an NFT. The User acknowledges the
            risk of smart contracts and agrees to be bound by the outcome of any
            smart contract operation by invoking, calling, requesting, or
            otherwise engaging with the smart contract, whether or not the smart
            contract behaves as per the User’s expectations. You acknowledge and
            agree that there are risks associated with purchasing and holding
            NFTs and using blockchain technology. These include, but are not
            limited to, risk of losing access to NFT due to loss of private
            key(s), custodial error or purchaser error, risk of mining or
            blockchain attacks, risk of hacking and security weaknesses, risk of
            unfavourable regulatory intervention in one or more jurisdictions,
            risks related to token taxation, risk of personal information
            disclosure, risk of uninsured losses, unanticipated risks, and
            volatility risks.
            <br />
            You are entirely responsible for the safety and management of your
            own private Ethereum wallets and validating all transactions and
            contracts generated by this Website before approval. Furthermore, as
            the smart contract runs on the Ethereum network, there is no ability
            to undo, reverse, or restore any transactions.
          </p>
          <p>
            OWNERSHIP
            <br />
            Your ownership of any Purchased NFT issued by Angry Bunnies is
            governed by a smart contract on the Ethereum Network, which cannot
            be reversed or modified in any way whatsoever.
          </p>
          <p>
            Commercial Usage
            <br />
            Subject to your continued compliance with the terms of this License,
            Angry Bunnies grants you a limited, worldwide, non-exclusive,
            non-transferable license to use, copy, and display the Art for your
            Purchased NFTs for the purpose of commercializing your own
            merchandise that includes, contains, or consists of the Art for your
            Purchased NFTs (“Commercial Use”). For the sake of clarity, nothing
            in this section will be deemed to restrict you from (i) owning or
            operating a marketplace that permits the use and sale of NFTs
            generally, provided that the marketplace cryptographically verifies
            each NFT owner’s rights to display the Art for their purchased NFTs
            to ensure that only the actual owner can display the Art; (ii)
            owning or operating a third party website or application that
            permits the inclusion, involvement, or participation of NFTs
            generally, provided that the third party website or application
            cryptographically verifies each NFT owner’s rights to display the
            Art for their Purchased NFTs to ensure that only the actual owner
            can display the Art, and provided that the Art is no longer visible
            once the owner of the purchased NFT leaves the website/application.
          </p>
          <p>
            DISCLAIMER OF LIABILITY
            <br />
            You hereby release and forever discharge the Angry Bunnies, its
            members, managers, subsidiaries, affiliates, licensors, partners in
            promotions or other business, or any of such parties respective
            agents, employees, officers, directors, managers, members, vendors,
            third party licensors, corporate partners, participants successors
            and assigns (collectively the “Company Parties”) from, and hereby
            waive and relinquish, each and every past, present and future
            dispute, claim, controversy, demand, right, obligation, liability,
            action and cause of action of every kind and nature (including
            personal injuries, death, and property damage), that has arisen or
            arises directly or indirectly out of, or that relates directly or
            indirectly to, the Website (including any interactions with, or act
            or omission of, other Users of the Website or any third party links,
            advertisements or other content).
          </p>
          <p>
            Terms of License
            <br />
            The license granted in Section 3 above applies only to the extent
            that you continue to own the applicable Purchased NFT. If at any
            time you sell, trade, donate, give away, transfer, or otherwise
            dispose of your Purchased NFT for any reason, the license granted in
            Section 3 will immediately expire with respect to those NFTs without
            the requirement of notice, and you will have no further rights in or
            to the Art for those NFTs.
          </p>
          <p>
            Ethereum Fees, payments and Taxes.
            <br />
            Any final acquisition, purchase, trade, or sale of an Angry Bunnies
            NFT will be conducted solely through the Ethereum network and
            third-party electronic wallets, though the Site may serve as a
            platform that facilitates such transactions. We have no control over
            these transactions as or once they occur, nor do we have the ability
            to reverse any transactions. You agree that we will have no
            liability to you or to any third party for any claims or damages
            that may arise as a result of any transactions pertaining to the
            Smart Contracts, or any other transactions that are conducted via
            the Ethereum network. Ethereum requires the payment of a transaction
            fee (a “Gas Fee”) for every transaction that occurs on the Ethereum
            network. (c) You will be solely responsible to pay any and all
            sales, use, value-added and other taxes, duties, and assessments
            (except taxes on our net income) now or hereafter claimed or imposed
            by any governmental authority (collectively, “Taxes”) associated
            with your use of the Angry Bunnies NFT, Smart Contract, or Site
            (including, without limitation, any Taxes that may become payable as
            the result of your ownership or transfer of any of your Angry
            Bunnies). Except for income taxes levied on Angry Bunnies, you: (i)
            will pay or reimburse us for all national, federal, state, local or
            other taxes and assessments of any jurisdiction, including value
            added taxes and taxes as required by international tax treaties,
            customs or other import or export taxes, and amounts levied in lieu
            thereof based on charges set, services performed or payments made
            hereunder, as are now or hereafter may be imposed under the
            authority of any national, state, local or any other taxing
            jurisdiction; and (ii) shall not be entitled to deduct the amount of
            any such taxes, duties or assessments from payments made to us
            pursuant to these Terms.
          </p>
          <p>
            TO THE EXTENT APPLICABLE, YOU HEREBY WAIVE THE PROTECTIONS OF
            CALIFORNIA CIVIL CODE § 1542 (AND ANY ANALOGOUS LAW IN ANY OTHER
            APPLICABLE JURISDICTION) WHICH SAYS: “A GENERAL RELEASE DOES NOT
            EXTEND TO CLAIMS WHICH THE CREDITOR DOES NOT KNOW OR SUSPECT TO
            EXIST IN HIS OR HER FAVOR AT THE TIME OF EXECUTING THE RELEASE,
            WHICH IF KNOWN BY HIM OR HER MUST HAVE MATERIALLY AFFECTED HIS OR
            HER SETTLEMENT WITH THE DEBTOR.” YOUR USE OF THE WEBSITE IS ENTIRELY
            AT YOUR OWN RISK. THE WEBSITE IS PROVIDED ON AN “AS IS” BASIS
            WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED,
            INCLUDING, BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. LASC MAKES NO
            WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY, CURRENTNESS,
            COMPLETENESS OR RELIABILITY OF ANY CONTENT PROVIDED THROUGH THE
            WEBSITE OR THIRD-PARTY CONTENT LINKED TO THE WEBSITE AND ASSUMES NO
            LIABILITY OR RESPONSIBILITY FOR ANY (I) ERRORS, MISTAKES, OR
            INACCURACIES OF CONTENT, (II) PERSONAL INJURY OR PROPERTY DAMAGE, OF
            ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE
            WEBSITE, (III) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE
            SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION STORED THEREIN.
            ANGRY BUNNIES NFT DOES NOT WARRANT, ENDORSE, GUARANTEE OR ASSUME
            RESPONSIBILITY FOR ANY SERVICE ADVERTISED OR OFFERED BY A
            THIRD-PARTY THROUGH THE WEBSITE OR ANY HYPERLINK OR FEATURED IN ANY
            BANNER OR OTHER ADVERTISING AND LASC WILL NOT BE A PARTY TO OR IN
            ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU
            AND THIRD PARTY PROVIDERS OF PRODUCTS OR SERVICES, OTHER THAN AS
            PROVIDED HEREIN. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE
            THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST
            JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE. WITHOUT LIMITING
            THE FOREGOING, NEITHER ANGRY BUNNIES NOR ITS AFFILIATES OR LICENSORS
            WARRANT THAT ACCESS TO THE WEBSITE WILL BE UNINTERRUPTED OR THAT THE
            WEBSITE WILL BE ERROR-FREE, OR THAT DEFECTS WILL BE CORRECTED OR
            THAT IT WILL ALWAYS BE ACCESSIBLE; NOR DO THEY MAKE ANY WARRANTY AS
            TO THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE WEBSITE, OR
            AS TO THE TIMELINESS, ACCURACY, RELIABILITY, COMPLETENESS OR CONTENT
            OF ANY CONTENT, INFORMATION OR MATERIALS PROVIDED THROUGH OR IN
            CONNECTION WITH THE USE OF THE WEBSITE. NEITHER LASC NOR ITS
            AFFILIATES OR LICENSORS IS RESPONSIBLE FOR THE CONDUCT, WHETHER
            ONLINE OR OFFLINE, OF ANY USER. NEITHER ANGRY BUNNIES NOR ITS
            AFFILIATES OR LICENSORS WARRANT THAT THE LASC IS FREE FROM VIRUSES,
            WORMS, TROJAN HORSES, OR OTHER HARMFUL COMPONENTS. COMPANY AND ITS
            AFFILIATES AND LICENSORS CANNOT AND DO NOT GUARANTEE THAT ANY
            PERSONAL INFORMATION SUPPLIED BY YOU WILL NOT BE MISAPPROPRIATED,
            INTERCEPTED, DELETED, DESTROYED OR USED BY OTHERS. YOU ACKNOWLEDGE
            AND AGREE THAT LASC IS ONLY WILLING TO PROVIDE THE WEBSITE IF YOU
            AGREE TO CERTAIN LIMITATIONS OF OUR LIABILITY TO YOU AND THIRD
            PARTIES. THEREFORE, YOU AGREE NOT TO HOLD COMPANY PARTIES LIABLE FOR
            ANY DAMAGE, SUITS, CLAIMS, AND/OR CONTROVERSIES (COLLECTIVELY,
            “LIABILITIES”) THAT HAVE ARISEN OR MAY ARISE, WHETHER KNOWN OR
            UNKNOWN, RELATING TO YOUR OR ANY OTHER PARTY’S USE OF OR INABILITY
            TO USE THE PLATFORM, INCLUDING WITHOUT LIMITATION ANY LIABILITIES
            ARISING IN CONNECTION WITH THE CONDUCT, ACT OR OMISSION OF ANY USER
            (INCLUDING WITHOUT LIMITATION STALKING, HARASSMENT THAT IS SEXUAL OR
            OTHERWISE, ACTS OF PHYSICAL VIOLENCE, AND DESTRUCTION OF PERSONAL
            PROPERTY), ANY DISPUTE WITH ANY USER, ANY INSTRUCTION, ADVICE, ACT,
            OR SERVICE PROVIDED BY ANGRY BUNNIES OR ITS AFFILIATES OR LICENSORS
            AND ANY DESTRUCTION OF YOUR INFORMATION. UNDER NO CIRCUMSTANCES WILL
            ANY COMPANY PARTIES BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
            CONSEQUENTIAL, SPECIAL OR EXEMPLARY DAMAGES ARISING IN CONNECTION
            WITH YOUR USE OF OR INABILITY TO USE THE WEBSITE, EVEN IF ADVISED OF
            THE POSSIBILITY OF THE SAME. SOME STATES DO NOT ALLOW THE EXCLUSION
            OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE
            LIMITATIONS MAY NOT APPLY TO YOU. IF, NOTWITHSTANDING THE FOREGOING
            EXCLUSIONS, IT IS DETERMINED THAT ANY COMPANY PARTY IS LIABLE FOR
            DAMAGES, IN NO EVENT WILL THE AGGREGATE LIABILITY, WHETHER ARISING
            IN CONTRACT, TORT, STRICT LIABILITY OR OTHERWISE, EXCEED ONE HUNDRED
            U.S. DOLLARS ($100.00).
          </p>
          <p>
            Certain transactions on the Website, including but not limited to
            primary sales, secondary market sales, listings, offers, bids,
            acceptances, and other operations through the Website utilize
            experimental smart contract and blockchain technology, including
            non-fungible tokens, cryptocurrencies, consensus algorithms, and
            decentralized or peer-to-peer networks and systems. Users
            acknowledge and agree that such technologies are experimental,
            speculative, and inherently risky. Users acknowledge and agree that
            the NFTs may be subject to bugs, malfunctions, timing errors,
            hacking and theft, or changes to the protocol rules of the Ethereum
            blockchain (i.e., “forks”), which can adversely affect the smart
            contracts and may expose you to a risk of total loss, forfeiture of
            your digital currency or NFTs, or lost opportunities to buy or sell
            NFTs. We assume no liability or responsibility for any such smart
            contract or related failures, risks, or uncertainties.
          </p>                      
          <br />
          <br />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;

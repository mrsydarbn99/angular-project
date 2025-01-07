import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  imports: [RouterLink, NgClass, NgIf, NgFor, RouterOutlet, NgStyle],
})
export class ProductDetailComponent implements OnInit {
  productId: string | null = null;
  category: string | null = null;

  products = [
    {
      category: 'medical-and-hospitalisation',
      categoryName: 'Medical & Hospitalization',
      categoryDetail: [
        {
          id: '1',
          title: 'Allianz Diabetic Essential',
          img: 'picture/product/pic1.jpeg',
          info: 'Diabetes should not stop you from getting the medical protection that you need. With Allianz Diabetic Essential, we believe that you deserve a second chance to be protected. As an encouragement Allianz is rewarding you with annual premium discounts should you maintain or improve your health.',
          description: 'With the higher risk of being diagnosed with major medical conditions, it is important to have a medical plan in place to help cover the cost of hospitalisation and surgery if you succumb to an illness as a result of diabetes. As a diabetic, now you can get medical coverage you deserve with Allianz.',
          ul: [
            'A choice of 4 medical plans to cover the cost of hospitalisation and surgery',
            'Annual health screening benefits for HbA1c blood test, kidney function test, lipid profile, medical examination and full urine examination',
            'Outpatient treatment benefits covering treatment such as cancer and kidney dialysis',
            'Enjoy annual premium discounts up to 40% for improving and maintaining your health',
          ],
          brochureLinks: [
            {
              title: 'Allianz Diabetic Essential Brochure',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/personal/life-health-and-savings/medical-and-hospitalisation/diabetic-essential/AllianzDiabeticEssential_brochure.pdf',
            },
          ],
        },
        {
          id: '2',
          title: 'MediAdvantage',
          img: 'picture/product/mediadvantage.jpeg',
          info: 'Access overseas medical expertise for your healthcare needs.',
          description: 'Sometimes the best treatment may be further away. Wouldn’t it be great if you had more medical options to choose from and potentially seek medical treatment overseas? Now you can with MediAdvantage. MediAdvantage provides overseas medical protection for Cancer, Coronary Artery Bypass Surgery, Heart Valve Surgery, Live-Donor Organ and Bone Marrow Transplant, as well as Intracranial and Specific Spinal Cord Surgery.',
          ul: [
            'Overseas Medical Treatment Benefit with coverage up to USD$4 million',
            'Second Medical Opinion from medical experts to confirm the diagnosis and to provide options on the best available treatment plan',
            'Seamless Experience from travel, accommodation and overseas treatment arrangements for you, your travelling companion(s) and, where applicable, your living donor',
            'Hospitalisation Indemnity Benefit to cover miscellaneous expenses during your overseas treatment up to USD200 per 24-hour confinement',
            'Post Overseas Medical Treatment Benefit provides continued coverage by the in-country Medication Benefit, and Overseas Follow-Up Care with the Overseas Treating Doctor, if medically required, after returning from your overseas medical treatment',
          ],
          brochureLinks: [
            {
              title: 'MediAdvantage Brochure',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/personal/life-health-and-savings/medical-and-hospitalisation/mediadvantage/Allianz_MediAdvantage_FA.pdf',
            },
          ],
        },
        {
          id: '3',
          title: 'HealthInsured',
          img: 'picture/product/diabeticessential.jpeg',
          info: 'Medical coverage designed to give you peace of mind.',
          description: 'There is no greater wealth in this world than peace of mind. HealthInsured is a plan that cares for your needs and protects you and your family with the most comprehensive medical coverage.',
          ul: [
            'No Overall Lifetime Limit & High Overall Annual Limit of up to RM5 million',
            'Full COVID-19 coverage for Category 3, 4 & 5 in the new normal',
            'Allianz Care@Home to provide medical-assisted attention at your home',
            'Extensive Cancer Coverage including access to genomic testing and extended out-patient cancer treatment cover',
            'Flexible deductible options for your medical solutions with Retirement Option at age 60',
            'All-in-one medical card to skip tedious paperwork during admission and discharge processes',
            'International Second Medical Opinion to help you make informed decisions',
            'Proactive protection for your preborn child as early as 13 weeks to 36 weeks into pregnancy',
          ],
          brochureLinks: [
            {
              title: 'HealthInsured Brochure',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/product-document/healthinsured-brochure.pdf',
            },
            {
              title: 'International Second Medical Opinion',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/personal/life-health-and-savings/medical-and-hospitalisation/medisafe-infinite/ISMOInternationalSecondMedicalOpinionFlyer.pdf',
            },
          ],
        },
      ],
    },
    {
      category: 'life-protection',
      categoryName: 'Life Protection',
      categoryDetail: [
        {
          id: '1',
          title: 'Allianz EverLink Plus',
          img: 'picture/product/pic2.jpg',
          info: 'Secure your family`s path towards stability & hope.',
          description: 'This regular premium investment-linked insurance plan offers robust protection with high coverage for Death or Total and Permanent Disability (TPD)* at a reasonable price. And, with flexible coverage terms tailored to your family`s needs, you can protect your loved ones without compromise.',
          ul: [
            'A plan with high coverage - Enjoy a coverage of RM500,000 with a monthly premium as low as RM125.',
            'Death or Total and Permanent Disability (TPD)* benefits - Ensure you and your loved ones will receive a payout of the insured amount and 100% of the account value.',
            'Ensure financial stability with flexible coverage terms - Flexible coverage terms, as short as 20 years or up to age 100, depending on your protection needs.',
            'Hassle-free automatic renewal feature - Upon maturity, your policy will be renewed automatically until the age of 100 without further underwriting to ensure long-lasting protection.',
            'Level up the protection with Level Term rider - Additional Death or Total and Permanent Disability (TPD)* coverage on top of basic plan`s coverage for prime time protection or loan protection.',
            'Protect your financial future with the InflationGuard rider - Step up your Death or Total and Permanent Disability (TPD)* coverage starting from the beginning of the 4th policy year without underwriting.',
          ],
          brochureLinks: [
            {
              title: 'Allianz EverLink Plus Brochure',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/personal/life-health-and-savings/life-protection/everlink-plus/AllianzEverLinkPlus_Brochure.pdf',
            },
          ],
        },
        {
          id: '2',
          title: 'Allianz EverLink Signature',
          img: 'picture/product/diabeticessential.jpeg',
          info: 'Protect the ones you love the most.',
          description: 'Secure the future for your loved ones today. This high coverage regular premium investment-linked insurance plan is an auto renewable plan that covers Death or Total and Permanent Disability (TPD)*, with a short commitment period, providing a reliable financial safety net that will protect and provide for the ones you love the most.',
          ul: [
            'High coverage with short commitment period & flexible coverage terms - Enjoy high coverage with flexibility to choose the premium payment term and coverage term.',
            'Death or Total and Permanent Disability (TPD)* benefits - Ensure you and your loved ones will receive a payout of the higher of your insured amount or 100% of the account value.',
            'Boost your investment with a Loyalty Bonus - Receive 18% of the insured amount at the end of the 30th policy year or at the end of the policy year when you attain age 64, whichever later.',
            'Hassle-free automatic renewal feature - Upon maturity, your policy will be renewed automatically until the age of 100 without further underwriting to ensure long-lasting protection.',
            'Personalise your coverage with additional riders - Enhance your protection by adding a variety of riders to your base plan.',

          ],
          brochureLinks: [
            {
              title: 'Allianz EverLink Signature Brochure',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/personal/life-health-and-savings/life-protection/everlink-signature/AllianzEverLinkSignature_Brochure.pdf',
            },
          ],
        },
        {
          id: '3',
          title: 'Allianz Kasih4All',
          img: 'picture/product/kasih4all.jpeg',
          info: 'Affordable coverage for those who matter most',
          description: 'Introducing our new and affordable life protection insurance that caters to you, designed to safeguard your loved ones financially in the event of unexpected occurrences in the future. This product is part of the Rahmah Insurance Initiative by the Government of Malaysia and Allianz Malaysia, aimed at providing enhanced and affordable protection to all Malaysians. ',
          ul: [
            'Coverage for Death Due to Accidental or Non-Accidental Causes, up to RM30,000',
            'Affordable premiums to suit your financial situation',
            'Coverage term up to the Life Assured attaining 71 years old nearest birthday',
          ],
          brochureLinks: [
            {
              title: 'Allianz Kasih4All Flyer BM',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/personal/life-health-and-savings/life-protection/allianz-kasih4all/Kasih4All_Flyer_BM.pdf',
            },
            {
              title: 'Allianz Kasih4All Flyer EN',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/personal/life-health-and-savings/life-protection/allianz-kasih4all/Kasih4All_Flyer_EN.pdf',
            },
            {
              title: 'Allianz Kasih4All Product Disclosure Sheet BM',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/personal/life-health-and-savings/life-protection/allianz-kasih4all/PDS_Kasih4All_BM_Aug2024.pdf',
            },
            {
              title: 'Allianz Kasih4All Product Disclosure Sheet EN',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/personal/life-health-and-savings/life-protection/allianz-kasih4all/PDS_Kasih4All_EN_Aug2024.pdf',
            },
          ],
        },
      ],
    },
    {
      category: 'critical-illness',
      categoryName: ' Critical Illness',
      categoryDetail: [
        {
          id: '1',
          title: 'HealthCover Plus',
          img: 'picture/product/pic3.jpeg',
          info: 'Supporting your journey to recovery',
          description: 'Having a critical illness can be tough for you and your family, have you done enough to protect you and your family during those trying times? HealthCover Plus is an Allianz PowerLink optional rider that provides a financial safety net for you and your family if you were diagnosed with a critical illness.',
          ul: [
            'Extensive coverage of 70 critical illnesses such as heart attack, cancer, Parkinson’s Disease, and stroke',
            'Protection against 7 additional critical illnesses for those below the age of 19',
            'Critical illness coverage up to age 100'
          ],
          brochureLinks: [
            {
              title: 'HealthCover Plus Brochure',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/personal/life-health-and-savings/critical-ilness/healthcover-plus/290524_HealthCoverPlusBrochure.pdf',
            },
          ],
        },
        {
          id: '2',
          title: 'Prime Care+',
          img: 'picture/product/primecare.jpeg',
          info: 'Protecting the fragility of life',
          description: 'Life can be unpredictable, full of ups and down, being diagnosed with a critical illness can be tough for you and your family. Early treatment brings higher chances of recovery. Therefore, Prime Care+ is a unique critical illness plan that provides extensive coverage against critical illnesses from Early to Advanced stages. This plan helps you to seek early treatment before a covered critical illness worsens. With Prime Care+, you can be confident that you will have a financial safety net during those periods of uncertainty.',
          ul: [
            'Extensive coverage of over 150 critical illness conditions such as heart attack, cancer, Parkinson’s Disease, and stroke from early to advanced stages',
            'Protection against 7 additional critical illnesses for those below the age of 19',
            'Diabetes and Cancer Recovery Benefit to help you recuperate and regain your ability to move on with your life planning',
            'Catastrophic CI Benefit should you be diagnosed with these 6 catastrophic illnesses i.e. cancer with metastasis, extensive heart attack, severe stroke, transplantation of both heart and lungs, total quadriplegia as a result of spinal cord injury and the loss of your limbs to help you through those difficult moments',
            'Critical illness coverage up to age 100',

          ],
          brochureLinks: [
            {
              title: 'PrimeCare+ Brochure',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/personal/life-health-and-savings/critical-ilness/prime-care/290524_PrimeCarePlusBrochure.pdf',
            },
          ],
        },
        {
          id: '3',
          title: 'PreciousCover and BabyCover',
          img: 'picture/product/preciouscover.jpeg',
          info: 'Celebrate your joy with our best mother and baby coverage',
          description: 'Introducing PreciousCover and BabyCover, two specially designed plans that look into the well-being of both mother and child through a host of pre and post-natal coverage, and also child’s coverage.',
          ul: [
            'Mental health coverage for mothers diagnosed with Major Depressive Disorders (MDD) or Generalised Anxiety Disorders (GAD)',
            'No hospitalisation needed on Phototherapy Treatment for Neonatal Jaundice',
            'Hospitalisation benefit for mother’s prenatal and postnatal conditions',
            'Compassionate care when the child is hospitalised in ICU/ HDU/ NICU',
            'Child development disorder benefit upon diagnosis of Autism Spectrum Disorder (ASD) or Attention Deficit Hyperactivity Disorder (ADHD)',
            'Accept pregnancies from assisted reproduction techniques',
            'Allianz Careline support for immediate medical advice',
          ],
          brochureLinks: [
            {
              title: 'PreciousCover & BabyCover Brochure',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/personal/life-health-and-savings/critical-ilness/preciouscover-and-babycover/PreciousCover_BabyCover_Brochure_PIDM1.pdf',
            }
          ],
        },
      ],
    },
    {
      category: 'personal-accident',
      categoryName: 'Personal Accident',
      categoryDetail: [
        {
          id: '1',
          title: 'Allianz Shield Plus',
          img: 'picture/product/pic4.jpg',
          info: 'Protect yourself from the unpredictable nature of life no matter where you are in the world with the Allianz Shield Plus insurance plan.',
          description: 'Accidents can happen to anyone when we least expect them. No one can deny that life is unpredictable and accidents do happen. The loss of income and the ever piling bills arising from serious accidental injuries can be extremely taxing. Such financial hardship could be burdensome for the loved ones in the event of a death. But you can be prepared for it by taking away the "what-ifs" with Allianz Shield Plus - a 24/7 worldwide personal insurance protection against accidents that will ensure you peace of mind.',
          ul: [
            'Renewal bonus up to 100%',
            'High coverage of up to RM3 million for accidental death and permanent disablement',
            'Double Indemnity in the event of death or permanent disablement',
            'Medical expenses including Cashless Hospital Admission and Discharge Benefit – Hospital Admission Guarantee (up to RM2, 500.00) at any participating hospital in Malaysia and within the Asia Pacific countries if such hospitalization is required due to accident',
            'Alternative medicine',
            'Snatch theft or attempted snatch theft',
            'Protection for smart devices and online purchase, as well as other interesting coverages under Lifestyle and Living Benefits (optional)',
            'Study interruption (optional)',
            'Up to 50% Discount for Family Cover ',
            'Up to 20% fast-tracked Renewal Bonus per year',
          ],
          brochureLinks: [
            {
              title: 'Allianz Shield Plus Brochure',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/product-document/ASP_e-Brochure_ENG.pdf',
            },
            {
              title: 'Allianz Shield Plus Special Occupation Brochure',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/product-document/ASPSO_e-Brochure_ENG.pdf',
            },
            {
              title: 'Allianz Shield Plus Product Disclosure Sheet',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/personal/life-health-and-savings/personal-accident/allianz-shield-plus/PDS_ASP_Eng_2403.pdf',
            },
            {
              title: 'Allianz Shield Plus Policy Wording',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/personal/life-health-and-savings/personal-accident/allianz-shield-plus/POL100ASP_Policy_ENG_AZ0824.pdf',
            },
            {
              title: 'Allianz Shield Plus Addendum',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/personal/life-health-and-savings/personal-accident/allianz-shield-plus/POL_102ASP_Policy_Addendum_AZ0124.pdf',
            },
            {
              title: 'Allianz Shield Plus Risk Assessment Questionnaire',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/personal/life-health-and-savings/personal-accident/allianz-shield-plus/ASP_RiskAssessmentQuestionnaire.pdf',
            },
            {
              title: 'Allianz Shield Plus Proposal Form',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/personal/life-health-and-savings/personal-accident/allianz-shield-plus/PRO124_PBPFE041202_ASP_ProForm_ENG_AZ0124.pdf',
            },
            {
              title: 'Allianz Shield Plus Panel Hospital Listing',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/personal/life-health-and-savings/personal-accident/allianz-shield-plus/AllianzShieldPlus_PanelHospitalList.pdf',
            },
          ],
        },
        {
          id: '2',
          title: 'Personal Accident Insurance',
          img: 'picture/product/personalaccident.jpeg',
          info: 'Life is unpredictable so protect yourself against various kinds of personal accidents',
          description: 'Allianz Personal Accident insurance provides compensation in the event of bodily injuries, disabilities or death caused by accidents.',
          ul: [
            'Accidental death and permanent disablement',
            'Medical and surgical treatment due to accidents',
          ],
          brochureLinks: [
            {
              title: 'Personal Accident including for Person with Disability Brochure',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/personal/life-health-and-savings/personal-accident/personal-accident/PA-incPWD_Brochure_2406.pdf',
            },
            {
              title: 'Personal Accident Product Disclosure Sheet',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/personal/life-health-and-savings/personal-accident/personal-accident/PDS_PersonalAccident_ENG_AZ0624.pdf',
            },
            {
              title: 'Personal Accident Policy Wording',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/product-document/PA_PW.pdf',
            },
            {
              title: 'Personal Accident including for Person with Disability Proposal Form',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/personal/life-health-and-savings/personal-accident/personal-accident/PersonalAccidentProposalFormENG.pdf',
            },
          ],
        },
        {
          id: '3',
          title: 'Special Occupation Personal Accident',
          img: 'picture/product/specialoccupation.jpeg',
          info: 'The ideal personal accident coverage for those who work in risky environments',
          description: 'Special Occupation Personal Accident insurance is designed especially for people who are working in occupation groups which are normally excluded under the standard personal accident insurance, such as those working in the construction and manufacturing sectors, offshore platforms, etc. This insurance provides 24 hours protection in the event of injuries, disability or death solely caused by accidents.',
          ul: [
            'Accidental death',
            'Permanent disablement',
            'Medical expenses',
          ],
          brochureLinks: [
            {
              title: 'Special Occupation Personal Accident Product Disclosure Sheet',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/product-document/SOPA_PDS_ENG.pdf',
            },
            {
              title: 'Special Occupation Personal Accident Policy Wording (Individual)',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/corporate/group-protection-and-personal-accidents/group-personal-accident/special-occupation-personal-accident/SOPA_POLICY_INDIVIDUAL_AZ0624.pdf',
            },
            {
              title: 'Special Occupation Personal Accident Policy Wording (Group)',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/corporate/group-protection-and-personal-accidents/group-personal-accident/special-occupation-personal-accident/SOPA_POLICY_GROUP_AZ0624.pdf',
            },
            {
              title: 'Special Occupation Personal Accident Proposal Form',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/personal/life-health-and-savings/personal-accident/special-occupation-personal-accident/SpecialOccupationPAProposalFormENG.pdf',
            },
          ],
        },
      ],
    },
    {
      category: 'savings',
      categoryName: ' Savings, Investment & Waivers',
      categoryDetail: [
        {
          id: '1',
          title: 'Prime Income',
          img: 'picture/product/pic5.jpeg',
          info: 'Kick off to a lifetime of protection and financial security with a short commitment of 8 years only for a better and brighter future',
          description: 'Prime Income is designed to give you a stable stream of income while keeping you and your family safe. Furthermore, you only need to pay premiums for only 8 years to enjoy a coverage. Instead of worrying about the future, be certain of it now.',
          ul: [
            'Short premium payment term of 8 years for life coverage up to age 90',
            'Guaranteed cash payment starting from the end of the 8th policy year',
            'Enjoy extra payout in the form of non-guaranteed cash dividends and terminal dividends',
            'Maturity benefit payable in one lump sum upon maturity',
          ],
          brochureLinks: [
            {
              title: 'Prime Income',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/personal/life-health-and-savings/savings-investments-and-waivers/prime-income/PrimeIncome.pdf',
            },
          ],
        },
        {
          id: '2',
          title: 'Allianz ValueGuard & Allianz ValueGuard Plus',
          img: 'picture/product/valueguard.png',
          info: 'Think ahead, guard & grow your wealth',
          description: 'At Allianz, we believe in playing the long game. Whether it’s investing​ your wealth for consistent returns, saving toward a comfortable retirement, or enjoying life with additional streams of income, ​ the Allianz ValueGuard and Allianz ValueGuard Plus provide you with unique benefits.',
          ul: [
            'Preservation of total premium paid​',
            'Guaranteed maturity benefit​',
            'No medical underwriting​',
            'Death benefit​',
            'Emergency fund for cancer​​',
            'Policy ownership transferred to Life Assured when attained age 16​​',
            'Conditional no lapse guarantee​​',
          ],
          brochureLinks: [
            {
              title: 'Allianz ValueGuard & Allianz ValueGuard Plus',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/personal/life-health-and-savings/savings-investments-and-waivers/valueguard/AllianzValueGuard_ValueGuardPlus_Brochure.pdf',
            },
          ],
        },
      ],
    },
    {
      category: 'home-insurance',
      categoryName: 'Home',
      categoryDetail: [
        {
          id: '1',
          title: 'Smart Home Cover',
          img: 'picture/product/pic8.jpg',
          info: 'A new kind of home insurance that offers flexibility for your peace of mind.',
          description: 'Secure your home or rental property with Smart Home Cover, a comprehensive plan that offers five customisable components namely HouseOwner (Building), HouseHolder (Content), Mortgage Loan Installment Protection, HomeFix, and Landlord Insurance. With Smart Home Cover, you can rest easy knowing that your home is protected.',
          ul: [
            'HouseOwner (Building) - Covers your residential building against damage',
            'HouseHolder (Content) - Covers your household contents and personal effects',
            'HomeFix - Mortgage Loan Installment Protection - Covers your monthly mortgage loan installment in the event that your house is deemed temporarily uninhabitable due to insured events or the insured suffers accidental death or permanent disablement',
            'Landlord Insurance - Covers malicious damage by tenant, tenant runaway and legal fees for letter of demand',
            'Multi-Year Plan Available - Convenient and uninterrupted protection for 3 years with a single premium. Spare yourself the hassle of annual renewals and enjoy cheaper premium across all components',
          ],
          brochureLinks: [
            {
              title: 'Smart Home Cover Flyer 1',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/product-document/SHC_Flyer1_ENG.pdf',
            },
            {
              title: 'Smart Home Cover Flyer 2',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/product-document/SHC_Flyer2_ENG.pdf',
            },
            {
              title: 'Smart Home Cover Brochure',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/product-document/SHC_brochure_ENG.pdf',
            },
            {
              title: 'Smart Home Cover Product Disclosure Sheet',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/product-document/SHC_PDS_ENG.pdf',
            },
            {
              title: 'Smart Home Cover Policy Jacket - Annual',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/product-document/SHC_Annual_PW_ENG.pdf',
            },
            {
              title: 'Smart Home Cover Policy Jacket - Multi Year',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/product-document/SHC_Multi-Year_PW_ENG.pdf',
            },
            {
              title: 'Smart Home Cover Proposal Form',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/product-document/SHC_Proposal_ENG.pdf',
            },
          ],
        },
      ],
    },
    {
      category: 'car-and-motorcycle',
      categoryName: 'Car & Motorcycle',
      categoryDetail: [
        {
          id: '1',
          title: 'Allianz Motor Comprehensive',
          img: 'picture/product/pic7.jpeg',
          info: 'We have now enhanced this product under the umbrella of the Rahmah Insurance Initiative with additional benefits',
          description: 'Motor Comprehensive insurance covers your car against liabilities to other parties for death or bodily injuries, damages to other parties` properties, accidental or fire damages to your car and theft of your car. Now, under the umbrella of the Rahmah Insurance Initiative, you can enjoy extra benefits with no additional charges.',
          ul: [
            'Losses or damages to your car due to accident, fire and theft',
            'Third Party death and bodily injuries',
            'Third Party property losses or damages',
            'Extended benefits',
            'Access to amazing benefits like Allianz Road Rangers',
          ],
          brochureLinks: [
            {
              title: 'Motor Comprehensive Flyer',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/product-document/CMCC_Flyer_ENG.pdf',
            },
            {
              title: 'Motor Comprehensive Insurance Product Disclosure Sheet',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/personal/home-motor-and-travel/car-and-motorcycle/car-and-motor-comprehensive-cover/MotorInsurance_ComprehensiveCoverENG_PDS_2409.pdf',
            },
            {
              title: 'Motorcycle Plus Product Disclosure Sheet',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/personal/home-motor-and-travel/car-and-motorcycle/allianz-motorcycle-plus/MotorcyclePlusENG_PDS_2409.pdf',
            },
            {
              title: 'PRIVATE CAR POLICY WORDING',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/product-document/PrivateCar_PW_ENG.pdf',
            },
            {
              title: 'Motorcycle Plus Policy Wording',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/personal/home-motor-and-travel/car-and-motorcycle/car-and-motor-comprehensive-cover/MotorcyclePlusENG_PW_2409.pdf',
            },
            {
              title: 'MOTORCYCLE POLICY WORDING',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/personal/home-motor-and-travel/car-and-motorcycle/car-and-motor-comprehensive-cover/MotorcyclePolicyWording_EN.pdf',
            },
            {
              title: 'COMMERCIAL VEHICLE POLICY WORDING',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/personal/home-motor-and-travel/car-and-motorcycle/car-and-motor-comprehensive-cover/CommercialVehicleENG_PW_2409.pdf',
            },
            {
              title: 'MOTOR TRADE POLICY WORDING',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/personal/home-motor-and-travel/car-and-motorcycle/car-and-motor-comprehensive-cover/MotorTrade_PW_2409.pdf',
            },
            {
              title: 'Claims Guide for Motor Accidents',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/pdf/how-tos-and-faqs/how-to-make-a-claim/PIAMMotorClaimsLeaflet_ENG.pdf',
            },
            {
              title: 'Private Car Road Side Assistance Terms & Conditions',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/personal/home-motor-and-travel/car-and-motorcycle/car-and-motor-comprehensive-cover/PrivateCarRSA_TnC_ENG.pdf',
            },
            {
              title: 'Motorcycle Road Side Assistance Terms & Conditions',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/personal/home-motor-and-travel/car-and-motorcycle/allianz-motorcycle-plus/MotorcycleRoadSideAssistanceTNC_EN.pdf',
            },
          ],
        },
        {
          id: '2',
          title: 'Enjoy Great Benefits with Allianz Motorcycle Insurance!',
          img: 'picture/product/motorcycleplus.png',
          info: 'Allianz Motorcycle Plus is now enhanced under the umbrella of the Rahmah Insurance Initiative with additional benefits for floods.',
          description: 'The newly upgraded Allianz Motorcycle Plus is enhanced to cover you, motorcycle, and is now further extended to the pillion rider too, at no extra cost. Now, under the umbrella of the Rahmah Insurance Initiative, you can enjoy complimentary flood relief benefit. Ride worry-free knowing you have protection against liabilities to other parties for death or bodily injuries, damages to other parties` properties, accidental or fire damages, and theft to your motorcycle.',
          ul: [],
          brochureLinks: [
            {
              title: 'Motorcycle Plus Flyer',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/product-document/AMP_Flyer_ENG.pdf',
            },
            {
              title: 'Motorcycle Plus Product Disclosure Sheet',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/personal/home-motor-and-travel/car-and-motorcycle/allianz-motorcycle-plus/MotorcyclePlusENG_PDS_2409.pdf',
            },
            {
              title: 'Motorcycle Plus Policy Wording',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/personal/home-motor-and-travel/car-and-motorcycle/car-and-motor-comprehensive-cover/MotorcyclePlusENG_PW_2409.pdf',
            },
            {
              title: 'Motorcycle Road Side Assistance Terms & Conditions',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/personal/home-motor-and-travel/car-and-motorcycle/allianz-motorcycle-plus/MotorcycleRoadSideAssistanceTNC_EN.pdf',
            },
            {
              title: 'Motorcycle Plus Flood Relief Benefit Under Rahmah Insurance',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/personal/home-motor-and-travel/car-and-motorcycle/allianz-motorcycle-plus/AllianzMotorcyclePlus_FloodReliefBenefit_InsuranceRahmah_Final.pdf',
            },
          ],
        },
      ],
    },
    {
      category: 'roadside-assistance',
      categoryName: 'Roadside Assistance',
      categoryDetail: [
        {
          id: '1',
          title: 'Enhanced Road Warrior',
          img: 'picture/product/pic8.jpg',
          info: '24-hour roadside assistance which offers a very comprehensive scope of protection',
          description: 'Enhanced Road Warrior is your best road partner and 24-hour roadside assistance which offers a very comprehensive scope of protection during a car breakdown or for when you or your passengers sustain personal injuries in the event of an accident.  Not only are you reassured of reliable 24-hour free unlimited towing distance and roadside assitance, you`ll get additional benefits such as free car replacement, compassionate cover and flood cover too.',
          ul: [
            'Allianz 24-Hour free unlimited towing distance and car assistance programme including minor roadside repairs etc',
            'Wide choice of authorised panel workshops nationwide',
            'Personal accident coverage for you and your passengers',
            'Accidental death and permanent disablement coverage',
            'Free car replacement',
            'Compassionate cover',
            'Compassionate flood cover',
          ],
          brochureLinks: [
            {
              title: 'Enhanced Road Warrior Brochure',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/product-document/ERW_Brochure.pdf',
            },
            {
              title: 'Enhanced Road Warrior Product Disclosure Sheet',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/product-document/ERW_PDS_ENG.pdf',
            },
            {
              title: 'Enhanced Road Warrior Policy Wording',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/product-document/ERW_PW.pdf',
            },
          ],
        }
      ],
    },
    {
      category: 'travel-insurance',
      categoryName: 'Travel Insurance',
      categoryDetail: [
        {
          id: '1',
          title: 'Allianz Travel Insurance',
          img: 'picture/product/pic9.jpg',
          info: 'Secure your trip with Allianz Travel Insurance!',
          description: 'When you travel, you would want to have a worry-free holiday. Allianz travel insurance will protect you and your family during your holidays, overseas or domestic.',
          ul: [
            'Now extended to include COVID-19 coverage',
            'Overseas and domestic travels for you and your family',
            'Death and permanent disablement due to accident',
            'Medical expenses',
            'Travel or luggage delay',
            'Emergency medical evacuation and repatriation programme',
          ],
          brochureLinks: [
            {
              title: 'Allianz Travel Easy Brochure',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/personal/home-motor-and-travel/travel-and-flight-insurance/allianz-travel-insurance/ATE_Brochure_AZ0824_ENG.pdf',
            },
            {
              title: 'Allianz Travel Care Proposal Form',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/personal/home-motor-and-travel/travel-and-flight-insurance/allianz-travel-insurance/PRO_064_PBPFE040603_ATC_Proposal_Form_ENG_AZ0324.pdf',
            },
            {
              title: 'Allianz Travel Easy Product Disclosure Sheet',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/personal/home-motor-and-travel/travel-and-flight-insurance/allianz-travel-insurance/PDS_ATE_ENG_AZ0324.pdf',
            },
            {
              title: 'Allianz Travel Care Product Disclosure Sheet',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/personal/home-motor-and-travel/travel-and-flight-insurance/allianz-travel-insurance/PDS_ATC_ENG_AZ0324.pdf',
            },
            {
              title: 'Allianz Travel Easy Domestic Policy Wording',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/personal/home-motor-and-travel/travel-and-flight-insurance/allianz-travel-insurance/POL028_ATE_Domestic_ENG.pdf',
            },
            {
              title: 'Allianz Travel Easy Overseas Policy Wording',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/personal/home-motor-and-travel/travel-and-flight-insurance/allianz-travel-insurance/POL029_ATE_Overseas_ENG.pdf',
            },
            {
              title: 'Allianz Travel Care Domestic Policy Wording',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/personal/home-motor-and-travel/travel-and-flight-insurance/allianz-travel-insurance/POL028_ATC_Domestic_ENG.pdf',
            },
            {
              title: 'Allianz Travel Care Overseas Policy Wording',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/personal/home-motor-and-travel/travel-and-flight-insurance/allianz-travel-insurance/POL029_ATC_Overseas_ENG.pdf',
            },
            {
              title: 'Allianz Travel Care Proposal Form',
              link: 'https://www.allianz.com.my/content/dam/onemarketing/azmb/wwwallianzcommy/personal/home-motor-and-travel/travel-and-flight-insurance/allianz-travel-insurance/PRO_064_PBPFE040603_ATC_Proposal_Form_ENG_AZ0324.pdf',
            },
          ],
        },
      ],
    },
  ];

  selectedProduct:
    | {
        id: string;
        title: string;
        img: string;
        info: string;
        description: string;
        ul: string[];
        brochureLinks: { title: string; link: string }[];
      }
    | null = null;

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
      // Subscribe to route parameter changes
      this.route.paramMap.subscribe((params) => {
        this.category = params.get('category');
        this.productId = params.get('id');
        this.loadProduct(this.category, this.productId);
      });
    }

    loadProduct(category: string | null, productId: string | null): void {
      if (!category || !productId) {
        this.selectedProduct = null;
        return;
      }

      const categoryDetails = this.products.find(
        (cat) => cat.category === category
      )?.categoryDetail;

      this.selectedProduct = categoryDetails?.find(
        (product) => product.id === productId
      ) || null;

      // Scroll to the top of the page
      window.scrollTo(0, 0);
    }

    getCategoryName(category: string | null): string {
      return (
        this.products.find((cat) => cat.category === category)?.categoryName ||
        'Unknown Category'
      );
    }

    getProductsByCategory(category: string | null): any[] {
      const categoryDetails = this.products.find((cat) => cat.category === category);
      return categoryDetails ? categoryDetails.categoryDetail : [];
    }
}

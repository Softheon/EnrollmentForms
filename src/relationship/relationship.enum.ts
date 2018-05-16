/**
 * Relationship enumeration
 */
export enum Relationship {
  SPOUSE = 'enroll-form.relationships.spouse',
  PARENT = 'enroll-form.relationships.parent',
  SON_DAUGHTER = 'enroll-form.relationships.sonDaughter',
  STEPSON_STEPDAUGHTER = 'enroll-form.relationships.stepChild',
  GRANDCHILD = 'enroll-form.relationships.grandChild',
  SIBLING = 'enroll-form.relationships.sibling',
  DOMESTIC_PARTNER = 'enroll-form.relationships.domesticPartner',
  CHILD_OF_DOMESTIC_PARTNER = 'enroll-form.relationships.childOfDomesticPartner',
  UNRELATED = 'enroll-form.relationships.unrelated',
  OTHER_RELATIVE = 'enroll-form.relationships.otherRelative',
  STEP_PARENT = 'enroll-form.relationships.stepParent',
  AUNT_UNCLE = 'enroll-form.relationships.auntUncle',
  NEPHEW_NIECE = 'enroll-form.relationships.nephewNiece',
  GRANDPARENT = 'enroll-form.relationships.grandparent',
  FIRST_COUSIN = 'enroll-form.relationships.firstCousin',
  PARENTS_DOMESTIC_PARTNER = 'enroll-form.relationships.parentsDomesticPartner',
  OTHER = 'enroll-form.relationships.other',
  BROTHER_IN_LAW_SISTER_IN_LAW = 'enroll-form.relationships.siblingInLaw',
  DAUGHTER_IN_LAW_SON_IN_LAW = 'enroll-form.relationships.sonDaughterInLaw',
  MOTHER_IN_LAW_FATHER_IN_LAW = 'enroll-form.relationships.parentInLaw',
  SPONSORED_DEPENDENT = 'enroll-form.relationships.sponsoredDependent',
  DEPENDENT_OF_A_MINOR_DEPENDENT = 'enroll-form.relationships.dependentOfDependent',
  SELF = 'enroll-form.relationships.self',

  //legal specific
  FOSTER_CHILD = 'enroll-form.relationships.fosterChild',
  COURT_APPOINTED_GUARDIAN = 'enroll-form.relationships.courtAppointedGuardian',
  ADOPTED_CHILD = 'enroll-form.relationships.adoptedChild',
  FORMER_SPOUSE = 'enroll-form.relationships.formerSpouse',
  FOSTER_PARENT = 'enroll-form.relationships.formerParent',
  GUARDIAN = 'enroll-form.relationships.guardian',
  ANNUITANT = 'enroll-form.relationships.annuitant',
  TRUSTEE = 'enroll-form.relationships.trustee',
  WARD = 'enroll-form.relationships.ward',

  //Tax Specific
  TAX_FILER = 'enroll-form.relationships.taxFiler',
  TAX_DEPENDENT = 'enroll-form.relationships.taxDependent',
  COLLATERAL_DEPENDENT = 'enroll-form.relationships.collateralDependent',

  // Other
  NONE = 'enroll-form.relationships.none'
}

/** Enumeration for family relationships */
export const FamilyRelationships: Relationship[] = [
  Relationship.SPOUSE,
  Relationship.PARENT,
  Relationship.SON_DAUGHTER,
  Relationship.STEPSON_STEPDAUGHTER,
  Relationship.GRANDCHILD,
  Relationship.SIBLING,
  Relationship.DOMESTIC_PARTNER,
  Relationship.CHILD_OF_DOMESTIC_PARTNER,
  Relationship.UNRELATED,
  Relationship.OTHER_RELATIVE,
  Relationship.STEP_PARENT,
  Relationship.AUNT_UNCLE,
  Relationship.NEPHEW_NIECE,
  Relationship.GRANDPARENT,
  Relationship.FIRST_COUSIN,
  Relationship.PARENTS_DOMESTIC_PARTNER,
  Relationship.OTHER,
  Relationship.BROTHER_IN_LAW_SISTER_IN_LAW,
  Relationship.DAUGHTER_IN_LAW_SON_IN_LAW,
  Relationship.MOTHER_IN_LAW_FATHER_IN_LAW,
  Relationship.SPONSORED_DEPENDENT,
  Relationship.DEPENDENT_OF_A_MINOR_DEPENDENT,
  Relationship.SELF,
]

/**Enumeration for legal relationships */
export const LegalRelationships: Relationship[] = [
  Relationship.ADOPTED_CHILD,
  Relationship.COURT_APPOINTED_GUARDIAN,
  Relationship.FORMER_SPOUSE,
  Relationship.FOSTER_CHILD,
  Relationship.FOSTER_PARENT,
  Relationship.GUARDIAN,
  Relationship.ANNUITANT,
  Relationship.TRUSTEE,
  Relationship.WARD,
  Relationship.OTHER,
]

/** Enumeration for tax relationships */
export const TaxRelationships: Relationship[] = [
  Relationship.TAX_FILER,
  Relationship.TAX_DEPENDENT,
  Relationship.COLLATERAL_DEPENDENT
]

export class RelationshipHelper{

  /**
   * Gets the counter relationship of the given relationship
   * ex param = parent, return = child
   * @param relation the relation of the person
   */
  public static getCounterRelationship(relation: Relationship): Relationship{
    switch(relation){
      case Relationship.SON_DAUGHTER:{
        return Relationship.PARENT;
      }

      case Relationship.PARENT:{
        return Relationship.SON_DAUGHTER;
      }

      case Relationship.AUNT_UNCLE:{
        return Relationship.NEPHEW_NIECE;
      }
      
      case Relationship.NEPHEW_NIECE:{
        return Relationship.AUNT_UNCLE;
      }
      
      case Relationship.STEPSON_STEPDAUGHTER: {
        return Relationship.STEP_PARENT;
      }

      case Relationship.STEP_PARENT: {
        return Relationship.STEPSON_STEPDAUGHTER;
      }

      case Relationship.DAUGHTER_IN_LAW_SON_IN_LAW: {
        return Relationship.MOTHER_IN_LAW_FATHER_IN_LAW;
      }

      case Relationship.MOTHER_IN_LAW_FATHER_IN_LAW: {
        return Relationship.DAUGHTER_IN_LAW_SON_IN_LAW;
      }

      case Relationship.GRANDCHILD: {
        return Relationship.GRANDPARENT;
      }

      case Relationship.GRANDPARENT: {
        return Relationship.GRANDCHILD;
      }

      case Relationship.CHILD_OF_DOMESTIC_PARTNER: {
        return Relationship.PARENTS_DOMESTIC_PARTNER;
      }

      case Relationship.PARENTS_DOMESTIC_PARTNER: {
        return Relationship.CHILD_OF_DOMESTIC_PARTNER
      }

      default: {
        return relation;
      }
    }
  }
}

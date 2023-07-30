import { useContext } from 'react';

import { LanguageContext } from '../../context/languageContext';

const MaintenanceList = (): string[] => {
    const languageContext = useContext(LanguageContext);

    if (!languageContext) {
        return [];
    }

    const { language } = languageContext;

    const MaintenanceListItem =
        language === 'en'
            ? [
                  'Scheduled maintenance planning and arrangement',
                  'Unscheduled and Aircraft-On-Ground (AOG) maintenance arrangement',
                  'Aircraft defect / deferred defect control according to the minimum equipment list',
                  'Airworthiness directives and service bulletins assessment and recommendation',
                  'Certificate of Airworthiness (C of A) renewal',
                  'Development / control/variation of maintenance programm',
                  'Coordination of import and export of new and used aircraft',
                  'Pre-purchase inspection (PPI)',
                  'Engine health monitoring',
                  'Life-limited parts control',
                  'Analysis and assessment of modification and repairs',
                  'Onsite maintenance event oversight',
                  'Performance of airworthiness review',
                  'Management of continuing airworthiness aircraft technical records and document',
                  'Maintenance invoice and record control',
              ]
            : [
                  'Планування та організація планового технічного обслуговування',
                  'Організація непланового технічного обслуговування та обслуговування повітряних суден на землі',
                  'Контроль за дефектами повітряного судна / відстроченими дефектами згідно зі списком мінімального обладнання',
                  'Оцінка та рекомендації стосовно повітряних директив та сервісних бюлетенів',
                  'Поновлення сертифікату придатності до польотів (C of A)',
                  'Розробка / контроль / зміна програми технічного обслуговування',
                  'Координація імпорту та експорту нових та вживаних повітряних суден',
                  'Огляд перед купівлею (PPI)',
                  'Моніторинг стану двигуна',
                  'Контроль обмеженого терміну експлуатації деталей',
                  'Аналіз та оцінка модифікацій та ремонтів',
                  'Контроль за подіями технічного обслуговування на місці',
                  'Проведення перегляду придатності до польотів',
                  'Управління технічними записами та документами повітряного судна з питань продовження придатності до польотів',
                  'Контроль над рахунками і записами про обслуговування',
              ];
    return MaintenanceListItem;
};

export { MaintenanceList };
